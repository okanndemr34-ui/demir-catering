"use client";
import { useState, useEffect } from "react";
import { useQuote } from "./QuoteProvider";
import { calculateQuote } from "../lib/pricing";
import { buildWhatsAppUrl } from "../lib/whatsapp";
export default function QuoteForm() {
  const { selected, setSelected, period, setPeriod } = useQuote();
  const [people, setPeople] = useState("50");
  const [today, setToday] = useState("");
  useEffect(() => {
    setToday(
      new Intl.DateTimeFormat("en-CA", {
        timeZone: "Europe/Istanbul",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(new Date()),
    );
  }, []);
  const quote = calculateQuote(selected, Number(people), period);
  function submit(e) {
    e.preventDefault();
    if (!e.currentTarget.reportValidity()) return;
    const fields = Object.fromEntries(new FormData(e.currentTarget));
    window.open(
      buildWhatsAppUrl(fields, quote),
      "_blank",
      "noopener,noreferrer",
    );
  }
  return (
    <form id="quote-form" onSubmit={submit}>
      <div className="form-grid">
        <label>
          Adınız / Firma adı
          <input
            name="name"
            required
            maxLength="100"
            placeholder="Adınız veya işletmeniz"
            autoComplete="name"
          />
        </label>
        <label>
          Hizmet / Menü
          <select
            name="package"
            id="package"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="standart">Personel · Standart</option>
            <option value="premium">Personel · Premium</option>
            <option value="tavuk-tulumba">Mevlüt · Tavuklu / Tulumba</option>
            <option value="tavuk-baklava">Mevlüt · Tavuklu / Baklava</option>
            <option value="et-tulumba">Mevlüt · Kavurmalı / Tulumba</option>
            <option value="et-baklava">Mevlüt · Kavurmalı / Baklava</option>
            <option value="ozel">Özel gün / Organizasyon</option>
          </select>
        </label>
        <label className="full" id="period-field" hidden={!quote.staff}>
          Personel yemeği fiyat dönemi
          <select
            id="period"
            name="period"
            value={period}
            disabled={!quote.staff}
            onChange={(e) => setPeriod(e.target.value)}
          >
            <option value="intro">İlk hafta · Tanışma fırsatı</option>
            <option value="regular">İlk haftadan sonra · Normal tarife</option>
          </select>
        </label>
        <label>
          Kişi sayısı
          <input
            id="people"
            name="people"
            type="number"
            min="1"
            max="100000"
            step="1"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            required
            inputMode="numeric"
          />
        </label>
        <label>
          Tarih
          <input id="date" name="date" min={today} type="date" required />
        </label>
        <label className="full">
          Hizmet bölgesi
          <select name="region" required>
            <option value="">Bölgenizi seçin</option>
            <option>Beylikdüzü</option>
            <option>Hadımköy</option>
            <option>Esenyurt</option>
            <option>Büyükçekmece</option>
            <option>Avcılar</option>
            <option>Diğer — uygunluk için görüşelim</option>
          </select>
        </label>
        <label className="full">
          WhatsApp iletişim hattı
          <select name="contact" id="contact">
            <option value="905305563261">0530 556 32 61</option>
            <option value="905342736607">0534 273 66 07</option>
          </select>
        </label>
        <label className="full">
          Ek notlar <span>(isteğe bağlı)</span>
          <textarea
            name="notes"
            rows="3"
            maxLength="1500"
            placeholder="Menü tercihi, vardiya, hizmet günü, servis ihtiyacı veya alerjen bilgisi..."
          ></textarea>
        </label>
      </div>
      <div className="estimate">
        <span>TAHMİNİ MENÜ TUTARI</span>
        <output id="total" aria-live="polite">
          {quote.totalLabel}
        </output>
        <p id="tax-note">{quote.detail}</p>
        <p id="saving-note" className="saving-note" aria-live="polite">
          {quote.savingsLabel}
        </p>
      </div>
      <p className="form-note">
        Bu hesaplama kesin teklif veya rezervasyon değildir. Teslimat, servis ve
        varsa ek talepler ayrıca netleştirilir.
      </p>
      <button type="submit" className="button full">
        WhatsApp'tan teklif isteyin <span>→</span>
      </button>
      <p className="privacy-note">
        WhatsApp açıldığında mesajı kontrol edip siz gönderirsiniz. Bu form
        bilgilerinizi sitede kaydetmez.
      </p>
    </form>
  );
}

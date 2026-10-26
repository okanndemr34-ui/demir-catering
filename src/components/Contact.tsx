import { site, whatsappUrl } from "@/data/site";
import { Reveal } from "./Reveal";
export function Contact() {
  return (
    <section className="contact section" id="teklif">
      <Reveal className="contact-intro">
        <div className="eyebrow">04 / FİYAT VE İLETİŞİM</div>
        <h2>
          Fiyat bilgisi
          <br />
          {"için bize "}
          <em>ulaşın.</em>
        </h2>
        <p>
          Menü, kişi sayısı ve organizasyon detaylarını birlikte konuşalım. Size
          uygun fiyat bilgisini telefonla ya da WhatsApp üzerinden paylaşalım.
        </p>
        <div className="location">
          <span className="pin-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M19 10c0 5.2-7 11-7 11S5 15.2 5 10a7 7 0 1 1 14 0Z" />
              <circle cx="12" cy="10" r="2.3" />
            </svg>
          </span>
          <div>
            Hizmet bölgemiz
            <br />
            <b>İstanbul · Esenyurt · Büyükçekmece</b>
          </div>
        </div>
      </Reveal>
      <Reveal className="contact-panel">
        <div className="eyebrow">DOĞRUDAN İLETİŞİM</div>
        <h3>Sofranızı birlikte planlayalım.</h3>
        <a className="contact-number" href={site.phoneHref}>
          {site.phone}
        </a>
        <p>Fiyat bilgisi ve rezervasyon için bize ulaşın.</p>
        <div className="contact-actions">
          <a className="button" href={site.phoneHref}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 3.8 9.8 3l2.1 4.5-2.2 1.7a14.4 14.4 0 0 0 5.1 5.1l1.7-2.2 4.5 2.1-.8 2.8a3 3 0 0 1-3.3 2.2A16.7 16.7 0 0 1 4.8 7.1 3 3 0 0 1 7 3.8Z" />
            </svg>
            Telefonla ara
          </a>
          <a
            className="button whatsapp"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.1 11.6a8.1 8.1 0 0 1-11.9 7.1L4 20l1.3-4a8.1 8.1 0 1 1 14.8-4.4Z" />
              <path d="M9 8.3c.4-.5.8-.4 1.1.1l.7 1.5c.2.3.1.6-.2.9l-.5.6c.8 1.3 1.7 2.1 3 2.7l.5-.6c.3-.3.6-.4 1-.2l1.3.7c.5.3.5.7.1 1.1-.5.7-1.2 1-2 1-2.6-.2-6.6-3.8-6.8-6.5-.1-.5.4-1.1.8-1.3Z" />
            </svg>
            WhatsApp’tan yazın
          </a>
        </div>
        <small>
          Fiyat; menü, kişi sayısı, tarih ve servis ihtiyacına göre belirlenir.
        </small>
      </Reveal>
    </section>
  );
}

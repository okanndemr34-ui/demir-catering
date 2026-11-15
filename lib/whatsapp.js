import { contacts } from "./catalog.js";
import { money } from "./pricing.js";
export function buildWhatsAppUrl(fields, quote) {
  const contact = contacts.includes(fields.contact)
    ? fields.contact
    : contacts[0];
  const message = [
    "Merhaba Demir Catering, teklif almak istiyorum.",
    `Ad / Firma: ${fields.name}`,
    `Hizmet / Menü: ${quote.name}`,
    `Kişi sayısı: ${fields.people}`,
    `Tarih: ${fields.date.split("-").reverse().join(".")}`,
    `Bölge: ${fields.region}`,
    quote.price !== null
      ? `Tahmini menü tutarı: ${money(quote.price * Number(fields.people))} (${quote.tax})`
      : "Fiyat: Özel teklif talebi",
    fields.notes ? `Notlar: ${fields.notes}` : "",
    "Menü, teslimat, servis ve uygunluk detaylarını paylaşabilir misiniz?",
  ]
    .filter(Boolean)
    .join("\n");
  return `https://wa.me/${contact}?text=${encodeURIComponent(message)}`;
}

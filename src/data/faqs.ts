import { site } from "./site";
export const faqs = [
  {
    question: "Hangi catering hizmetlerini sunuyorsunuz?",
    answer:
      "İş yerlerine personel yemeği, mevlüt yemeği, nişan ve düğün organizasyon yemeği ile fuar catering hizmetleri sunuyoruz.",
  },
  {
    question: "Menüyü ihtiyacımıza göre planlayabilir miyiz?",
    answer:
      "Menü içeriği; organizasyon türü, kişi sayısı ve tercihleriniz değerlendirilerek görüşme sırasında planlanır. Sayfadaki menüler örnek olarak sunulmuştur.",
  },
  {
    question: "Fiyatlandırma nasıl belirleniyor?",
    answer: `Hizmet türü, kişi sayısı, menü, tarih, adres ve servis ihtiyacına göre teklif hazırlanır. Fiyat bilgisi için bizi ${site.phone} numarasından arayabilir veya WhatsApp üzerinden yazabilirsiniz.`,
  },
  {
    question: "Alerjen ve özel beslenme taleplerini nasıl iletebilirim?",
    answer:
      "Alerji veya özel beslenme ihtiyaçlarını menü planlamasından önce belirtin. Uygun içerik ve hazırlama koşulları ayrıca teyit edilmelidir.",
  },
] as const;

export const site = {
  name: "Demir Catering",
  phone: "0530 556 32 61",
  phoneHref: "tel:+905305563261",
  whatsapp: "905305563261",
  description:
    "Demir Catering: iş yeri personel yemekleri, mevlüt yemekleri, nişan ve düğün organizasyonları, fuar catering. İstanbul Esenyurt ve Büyükçekmece.",
};
export const navigation = [
  { href: "#hizmetler", label: "Hizmetlerimiz" },
  { href: "#yaklasim", label: "Yaklaşımımız" },
  { href: "#menuler", label: "Örnek menüler" },
];
export function whatsappUrl(
  message = "Merhaba Demir Catering, fiyat bilgisi almak istiyorum.",
) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

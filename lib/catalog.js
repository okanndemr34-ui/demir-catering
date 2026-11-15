export const packages = {
  standart: {
    name: "Personel · Standart",
    price: 149,
    regular: [199, 189, 179],
  },
  premium: { name: "Personel · Premium", price: 179, regular: [249, 239, 229] },
  "tavuk-tulumba": { name: "Tavuklu pilav / Tulumba", price: 169 },
  "tavuk-baklava": { name: "Tavuklu pilav / Baklava", price: 219 },
  "et-tulumba": { name: "Kavurmalı pilav / Tulumba", price: 289 },
  "et-baklava": { name: "Kavurmalı pilav / Baklava", price: 319 },
  ozel: { name: "Özel gün / Organizasyon", price: null },
};
export const memorialMenus = Object.entries(packages).filter(
  ([key]) => key.startsWith("tavuk-") || key.startsWith("et-"),
);
export const contacts = ["905305563261", "905342736607"];
export const areas = [
  "Beylikdüzü",
  "Hadımköy",
  "Esenyurt",
  "Büyükçekmece",
  "Avcılar",
];

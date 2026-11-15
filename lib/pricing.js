import { packages } from "./catalog.js";
export const money = (n) =>
  new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 0 }).format(n) +
  " TL";
export function personnelPrice(key, count, period) {
  const item = packages[key];
  if (!item?.regular || !Number.isInteger(count) || count < 1 || count > 100)
    return null;
  if (period === "intro") return item.price;
  return item.regular[count <= 20 ? 0 : count <= 50 ? 1 : 2];
}
export function calculateQuote(key, count, period = "intro") {
  const item = packages[key] || packages.ozel;
  const staff = Boolean(item.regular);
  const valid = Number.isInteger(count) && count > 0 && count <= 100000;
  const price = valid
    ? staff
      ? personnelPrice(key, count, period)
      : item.price
    : null;
  const tax = staff
    ? `KDV hariç · ${period === "intro" ? "İlk hafta" : "İlk haftadan sonra"} · Bir günlük menü tutarı`
    : key === "ozel"
      ? "Menünüze ve organizasyon detaylarına göre fiyatlandırılır."
      : "KDV dahil";
  const normal = staff ? personnelPrice(key, count, "regular") : null;
  return {
    name: item.name,
    staff,
    price,
    tax,
    valid,
    totalLabel: !valid
      ? "Geçerli kişi sayısı girin"
      : price === null
        ? "Size özel teklif"
        : money(price * count),
    detail:
      staff && count > 100
        ? "100 kişi üzeri için özel teklif alın."
        : tax + (price !== null ? ` · ${count} kişi × ${money(price)}` : ""),
    savingsLabel:
      staff && price !== null && period === "intro"
        ? `Normal tarife: ${money(normal)} + KDV / kişi. İlk hafta günlük avantajınız: ${money((normal - price) * count)} (KDV hariç).`
        : "",
  };
}

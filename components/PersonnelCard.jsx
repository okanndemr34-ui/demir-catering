import { packages } from "../lib/catalog";
const ranges = ["1–20", "21–50", "51–100"];
export default function PersonnelCard({ type }) {
  const menu = packages[type];
  const premium = type === "premium";
  const savings = menu.regular.map((price) => price - menu.price);
  return (
    <article className={`price-card ${premium ? "featured" : ""}`}>
      <p>İLK HAFTAYA ÖZEL TANIŞMA FIRSATI</p>
      <h3>{premium ? "Premium" : "Standart"} Paket</h3>
      <div className="price">
        {menu.price} <span>TL + KDV</span>
      </div>
      <p>Kişi başı · İlk hafta</p>
      <div className="saving-badge">
        Kişi başı {Math.min(...savings)}–{Math.max(...savings)} TL avantaj
      </div>
      <ul>
        <li>Ana yemek · Yardımcı yemek · Çorba{premium ? " · Salata" : ""}</li>
        <li>
          {premium ? "Tatlı · İçecek · Ekmek · Su" : "Salata · Ekmek · Su"}
        </li>
      </ul>
      <h4>İlk haftadan sonraki tarife</h4>
      <table className="rate-table">
        <thead>
          <tr>
            <th scope="col">Kişi sayısı</th>
            <th scope="col">Normal fiyat*</th>
            <th scope="col">
              İlk hafta
              <br />
              avantajı*
            </th>
          </tr>
        </thead>
        <tbody>
          {menu.regular.map((price, i) => (
            <tr key={ranges[i]}>
              <th scope="row">{ranges[i]} kişi</th>
              <td>{price} TL</td>
              <td>{savings[i]} TL</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="rate-note">
        *Kişi başı, KDV hariç. Avantaj, aynı kişi aralığının normal tarifesine
        göre hesaplanır.
      </p>
      <button className="button" data-package={type} data-select={type}>
        Tanışma fırsatından yararlanın →
      </button>
    </article>
  );
}

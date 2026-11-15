import { memorialMenus } from "../lib/catalog";
export default function MemorialPanel() {
  return (
    <div
      id="mevlut-panel"
      role="tabpanel"
      aria-labelledby="mevlut-tab"
      className="panel"
    >
      <div className="campaign">
        <span>KDV DAHİL</span> Her menüde su böreği, ayran ve bardak su
      </div>
      <div id="mevlut-cards" className="price-grid">
        {memorialMenus.map(([key, menu]) => (
          <article className="price-card" key={key}>
            <p>MEVLÜT MENÜSÜ</p>
            <h3>{key.startsWith("tavuk") ? "Tavuklu" : "Kavurmalı"} pilav</h3>
            <p>{key.endsWith("tulumba") ? "Tulumbalı" : "Baklavalı"} menü</p>
            <div className="price">
              {menu.price} <span>TL</span>
            </div>
            <p>Kişi başı · KDV dahil</p>
            <hr />
            <ul>
              <li>Su böreği</li>
              <li>
                {key.endsWith("tulumba") ? "2 adet tulumba" : "1 adet baklava"}
              </li>
              <li>Ayran ve bardak su</li>
            </ul>
            <button className="button outline" data-select={key}>
              Bu menüyü seçin →
            </button>
          </article>
        ))}
      </div>
      <p className="note">
        Fiyatlar kişi başıdır. Tulumbalı menüde 2 adet tulumba, baklavalı menüde
        1 adet baklava bulunur. Teslimat ve servis detayları teklif sırasında
        netleştirilir.
      </p>
    </div>
  );
}

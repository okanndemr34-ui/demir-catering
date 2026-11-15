import PersonnelCard from "./PersonnelCard";
export default function PersonnelPanel() {
  return (
    <>
      <div
        id="personel-panel"
        role="tabpanel"
        aria-labelledby="personel-tab"
        className="panel"
      >
        <div className="campaign">
          <span>İLK HAFTAYA ÖZEL</span> Sofranıza lezzet, bütçenize avantaj.
        </div>
        <div className="price-grid two">
          <PersonnelCard type="standart" />
          <PersonnelCard type="premium" />
        </div>
        <div className="savings-example">
          <strong>50 kişilik işletmenizde farkı görün.</strong>
          <p>
            Standart pakette günlük <b>2.000 TL</b>, Premium pakette günlük{" "}
            <b>3.000 TL</b> avantaj. İlk hafta 5 gün hizmet alırsanız sırasıyla{" "}
            <b>10.000 TL</b> ve <b>15.000 TL</b> tasarruf.
          </p>
          <small>
            Örnek hesap: 50 kişi × (normal kişi başı fiyat − ilk hafta fiyatı).
            Tutarlar KDV hariçtir.
          </small>
        </div>
        <p className="note">
          Tanışma fiyatları yalnızca ilk hafta geçerlidir. İkinci haftadan
          itibaren kişi sayınıza uygun normal tarife uygulanır. 100 kişi üzeri
          için özel teklif alın. Teslimat ve servis detayları ayrıca
          netleştirilir.
        </p>
      </div>
    </>
  );
}

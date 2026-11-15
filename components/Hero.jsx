import { preload } from "react-dom";
export default function Hero() {
  preload("/assets/personel-sunum.png", { as: "image", fetchPriority: "high" });
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span></span> DEMİR CATERING
          </p>
          <h1>
            Birlikte kurulan
            <br />
            sofralara,
            <br />
            <em>özenle.</em>
          </h1>
          <p className="intro">
            İş yerinizde her gün, özel günlerinizde hep yanınızda. Kalabalık
            sofraların lezzetini birlikte planlayalım.
          </p>
          <div className="actions">
            <a className="button" href="#menuler">
              Menüleri keşfedin <span>→</span>
            </a>
            <a className="text-link" href="#teklif">
              Size özel teklif alın →
            </a>
          </div>
          <div className="hero-foot">
            <span>PERSONEL YEMEĞİ</span>
            <i></i>
            <span>MEVLÜT</span>
            <i></i>
            <span>ORGANİZASYON</span>
          </div>
        </div>
        <div
          className="hero-photo"
          role="img"
          aria-label="Pilav, ana yemek ve salatadan oluşan örnek personel yemeği sunumu"
        >
          <div className="photo-top">
            HER SOFRAYA AYNI ÖZEN <span>✦</span>
          </div>
          <div className="offer">
            <span>İŞLETMELERE ÖZEL · İLK HAFTA</span>
            <div>
              Tanışma paketi{" "}
              <strong>
                149 <small>TL + KDV</small>
              </strong>
            </div>
            <p>
              Standart paket · Kişi başı{" "}
              <a href="#menuler" aria-label="Tanışma paketi detayları">
                →
              </a>
            </p>
          </div>
          <small className="example">Örnek sunum</small>
        </div>
      </section>
    </>
  );
}

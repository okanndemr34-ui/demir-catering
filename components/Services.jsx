export default function Services() {
  return (
    <>
      <section id="hizmetler" className="section">
        <div className="section-head">
          <div>
            <p className="eyebrow">01 / HİZMETLERİMİZ</p>
            <h2>
              Her buluşmanın
              <br />
              bir sofrası var.
            </h2>
          </div>
          <p>
            Günlük yemek ihtiyaçlarından hayatınızdaki özel anlara, ihtiyacınıza
            uygun catering hizmeti.
          </p>
        </div>
        <div className="services">
          <a href="#menuler" className="service">
            <div
              className="service-photo staff"
              role="img"
              aria-label="Üç gözlü kapta tavuk sote, pilav ve salata; örnek sunum"
            >
              <small>Örnek sunum</small>
            </div>
            <div className="service-title">
              <span>01</span>
              <h3>Personel yemeği</h3>
              <b>→</b>
            </div>
            <p>
              Fabrika, atölye ve ofisler için günlük yemek. Kişi sayınıza ve
              vardiyanıza göre planlama.
            </p>
          </a>
          <a href="#menuler" className="service">
            <div
              className="service-photo memorial"
              role="img"
              aria-label="Üç gözlü kapta tavuklu pilav, su böreği ve tulumba; örnek sunum"
            >
              <small>Örnek sunum</small>
            </div>
            <div className="service-title">
              <span>02</span>
              <h3>Mevlüt yemeği</h3>
              <b>→</b>
            </div>
            <p>
              Tavuklu veya kavurmalı pilav menüleriyle misafirlerinize özenli
              bir ikram.
            </p>
          </a>
          <a href="#teklif" className="service">
            <div className="service-photo event"></div>
            <div className="service-title">
              <span>03</span>
              <h3>Özel gün &amp; davet</h3>
              <b>→</b>
            </div>
            <p>
              Düğün, nişan, söz, doğum günü, fuar ve kurumsal buluşmalarınıza
              özel menüler.
            </p>
          </a>
        </div>
      </section>
    </>
  );
}

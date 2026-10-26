import { Reveal } from "./Reveal";
export function Approach() {
  return (
    <section className="approach" id="yaklasim">
      <div className="approach-photo">
        <img
          src="/assets/event.jpg"
          alt="Bir organizasyon için hazırlanmış davet sofrası"
          loading="lazy"
          decoding="async"
        />
        <span>Lezzet, detaylarda saklı.</span>
      </div>
      <Reveal className="approach-copy">
        <div className="eyebrow">02 / DEMİR CATERING YAKLAŞIMI</div>
        <h2>
          Siz anın tadını çıkarın.
          <br />
          <em>
            Sofrayı birlikte
            <br />
            planlayalım.
          </em>
        </h2>
        <p>
          Her buluşmanın ihtiyacı farklıdır. Bu yüzden menüden kişi sayısına,
          sunumdan servis akışına kadar detayları sizinle konuşarak
          şekillendiriyoruz.
        </p>
        <div className="principle">
          <span>01</span>
          <div>
            <h3>İhtiyacınızı dinliyoruz.</h3>
            <p>
              Organizasyonunuzu, beklentilerinizi ve bütçenizi birlikte
              değerlendiriyoruz.
            </p>
          </div>
        </div>
        <div className="principle">
          <span>02</span>
          <div>
            <h3>Menünüzü planlıyoruz.</h3>
            <p>
              Misafirlerinize ve etkinliğinize uygun lezzetleri bir araya
              getiriyoruz.
            </p>
          </div>
        </div>
        <div className="principle">
          <span>03</span>
          <div>
            <h3>Detayları netleştiriyoruz.</h3>
            <p>
              Tarih, adres, teslimat ve servis ihtiyaçlarını önceden
              konuşuyoruz.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

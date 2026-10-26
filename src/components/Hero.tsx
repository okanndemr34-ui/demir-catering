export function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <div className="eyebrow">
          <span />
          {" DEMİR CATERING · İSTANBUL"}
        </div>
        <h1>
          Her sofrada
          <br />
          {"aynı "}
          <em>özen.</em>
        </h1>
        <p>
          İş yerinizde her gün, özel günlerinizde her an.
          <br />
          Bir araya geldiğiniz sofralara lezzet katıyoruz.
        </p>
        <div className="hero-actions">
          <a className="button" href="#teklif">
            {"Fiyat bilgisi alın "}
            <span>→</span>
          </a>
          <a className="text-link" href="#hizmetler">
            {"Hizmetleri keşfet "}
            <span>↓</span>
          </a>
        </div>
        <div className="hero-bottom">
          <span className="line-icon">♧</span>
          <p>
            Günlük yemeklerden özel davetlere,
            <br />
            <b>ihtiyacınıza göre bir sofra.</b>
          </p>
        </div>
      </div>
      <div className="hero-image">
        <img
          src="/assets/servis.jpg"
          alt="Sıcak yemek tezgâhından pilav ve et yemeği servisi"
          fetchPriority="high"
          decoding="async"
        />
        <div className="image-shade" />
        <span className="image-caption">
          BİR ARAYA GELMENİN EN LEZZETLİ HALİ
        </span>
        <div className="image-label">
          <span>Özenle hazırlanır.</span>
          <i>Keyifle paylaşılır.</i>
        </div>
        <a
          href="#hizmetler"
          className="round-arrow"
          aria-label="Hizmetlere ilerle"
        >
          ↓
        </a>
      </div>
      <div className="hero-index">01 — SOFRAYA DAVETLİSİNİZ</div>
    </section>
  );
}

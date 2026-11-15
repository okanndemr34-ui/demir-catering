export default function SpecialPanel() {
  return (
    <>
      <div
        id="ozel-panel"
        role="tabpanel"
        aria-labelledby="ozel-tab"
        className="panel"
      >
        <div className="custom-event">
          <img
            src="/assets/organizasyon.jpg"
            alt="Demir Catering düğün, nişan ve fuar catering tanıtımı"
            loading="lazy"
            width={1536}
            height={1024}
            decoding="async"
          />
          <div>
            <p className="eyebrow">SİZİN GÜNÜNÜZ, SİZİN MENÜNÜZ</p>
            <h3>Her detay size özel.</h3>
            <p>
              Düğün, nişan, söz, doğum günü veya fuar. Tarih, konum, kişi sayısı
              ve menü tercihinizi paylaşın; organizasyonunuza özel fiyat
              hazırlayalım.
            </p>
            <button className="button" data-package="ozel" data-select="ozel">
              Organizasyon teklifi alın →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

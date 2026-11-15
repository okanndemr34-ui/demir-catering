"use client";
import { useRef, useState, useEffect } from "react";
export default function Gallery() {
  const dialog = useRef(null);
  const trigger = useRef(null);
  const [poster, setPoster] = useState(null);
  useEffect(() => {
    if (poster) dialog.current.showModal();
  }, [poster]);
  function open(e) {
    const button = e.target.closest("[data-poster]");
    if (button) {
      trigger.current = button;
      setPoster(button.dataset.poster);
    }
  }
  function close() {
    dialog.current.close();
    setPoster(null);
    trigger.current?.focus();
  }
  return (
    <>
      <section className="section gallery" onClick={open}>
        <div className="section-head">
          <div>
            <p className="eyebrow">DEMİR CATERING'DEN</p>
            <h2>Menülerimize yakından bakın.</h2>
          </div>
          <p>Güncel tanıtımlarımız ve örnek sunumlarımız.</p>
        </div>
        <div className="new-food-gallery">
          <button
            data-poster="/assets/personel-sunum.png"
            aria-label="Yeni personel yemeği sunumunu büyüt"
          >
            <img
              src="/assets/personel-sunum.png"
              alt="Üç gözlü kapta personel yemeği örnek sunumu"
              loading="lazy"
              width={1536}
              height={1024}
              decoding="async"
            />
            <span>Personel yemeği · Örnek sunum →</span>
          </button>
          <button
            data-poster="/assets/mevlut-sunum.png"
            aria-label="Yeni mevlüt yemeği sunumunu büyüt"
          >
            <img
              src="/assets/mevlut-sunum.png"
              alt="Üç gözlü kapta mevlüt menüsü örnek sunumu"
              loading="lazy"
              width={1536}
              height={1024}
              decoding="async"
            />
            <span>Mevlüt menüsü · Örnek sunum →</span>
          </button>
        </div>
        <div className="posters">
          <button
            data-poster="/assets/personel.jpg"
            aria-label="Personel yemeği afişini büyüt"
          >
            <img
              loading="lazy"
              src="/assets/personel.jpg"
              alt="İlk hafta Standart 149 TL + KDV, Premium 179 TL + KDV"
              width={1080}
              height={1440}
              decoding="async"
            />
            <span>Personel tanışma paketi →</span>
          </button>
          <button
            data-poster="/assets/mevlut.jpg"
            aria-label="Mevlüt menüsü afişini büyüt"
          >
            <img
              loading="lazy"
              src="/assets/mevlut.jpg"
              alt="Mevlüt menüleri ve fiyatları"
              width={864}
              height={1536}
              decoding="async"
            />
            <span>Mevlüt menüleri →</span>
          </button>
          <button
            data-poster="/assets/organizasyon.jpg"
            aria-label="Organizasyon afişini büyüt"
          >
            <img
              loading="lazy"
              src="/assets/organizasyon.jpg"
              alt="Düğün nişan ve fuar catering hizmetleri"
              width={1536}
              height={1024}
              decoding="async"
            />
            <span>Özel gün &amp; organizasyon →</span>
          </button>
        </div>
      </section>
      <dialog
        ref={dialog}
        id="poster-dialog"
        aria-label="Demir Catering afişi"
        onCancel={close}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <button id="close-dialog" onClick={close} aria-label="Afişi kapat">
          Kapat ×
        </button>
        {poster && (
          <img
            id="poster-image"
            src={poster}
            alt="Demir Catering tanıtım afişi"
          />
        )}
      </dialog>
    </>
  );
}

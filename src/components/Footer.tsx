import { site } from "@/data/site";
export function Footer() {
  return (
    <footer>
      <a className="footer-name" href="#top">
        {"DEMİR "}
        <span>CATERING</span>
      </a>
      <p>İş günlerine lezzet. Özel günlere özen.</p>
      <a className="footer-phone" href={site.phoneHref}>
        {site.phone}
      </a>
      <a href="#top">Yukarı dön ↑</a>
      <small>
        {"© "}
        <span>{new Date().getFullYear()}</span>
        {
          " Demir Catering · Fotoğraflar hizmet türlerini temsil eder; Demir Catering’e ait çekimler değildir."
        }
      </small>
      <details className="photo-credits">
        <summary>
          {"Görsel kaynakları "}
          <span>+</span>
        </summary>
        <p>
          <a
            href="https://www.mealbox.com.tr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yemek servisi: Meal Box
          </a>
          {" · "}
          <a
            href="https://www.beytullahyemek.com/yemek/114/gunun-menusu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tabldot: Beytullah Yemek
          </a>
          {" · "}
          <a
            href="https://www.adilorganizasyon.com/tavuk-pilav-dagitimi.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mevlüt ikramı: Adil Organizasyon
          </a>
          {" · "}
          <a
            href="https://www.akorganizasyon.com/urun/yemek-organizasyonu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Davet servisi: AK Organizasyon
          </a>
          {" · "}
          <a
            href="https://www.gloriaajans.com/fuar-catering-istanbul"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fuar ikramı: Gloria Ajans
          </a>
          {" · "}
          <a
            href="https://theark.events/acknowledgements.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Davet sofrası: Unsplash
          </a>
        </p>
      </details>
    </footer>
  );
}

export default function Footer() {
  return (
    <>
      <footer id="iletisim">
        <div className="footer-top">
          <div>
            <p className="eyebrow">BİR TELEFON KADAR YAKIN</p>
            <h2>
              Güzel sofralarda
              <br />
              buluşalım.
            </h2>
          </div>
          <div>
            <a className="footer-phone" href="tel:+905305563261">
              0530 556 32 61 →
            </a>
            <a className="footer-phone" href="tel:+905342736607">
              0534 273 66 07 →
            </a>
            <a
              className="text-link"
              href="https://wa.me/905305563261"
              target="_blank"
              rel="noopener"
            >
              WhatsApp üzerinden bize yazın →
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © <span>{new Date().getFullYear()}</span> Demir Catering
          </span>
          <span>Beylikdüzü · Hadımköy · Esenyurt · Büyükçekmece · Avcılar</span>
          <a href="#">Başa dön ↑</a>
        </div>
      </footer>
    </>
  );
}

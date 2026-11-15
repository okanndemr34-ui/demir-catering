"use client";
import { useState } from "react";
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="topline">
        <span>İstanbul Avrupa Yakası · Toplu yemek &amp; organizasyon</span>
        <div className="top-phones">
          <a href="tel:+905305563261">0530 556 32 61 →</a>
          <a href="tel:+905342736607">0534 273 66 07 →</a>
        </div>
      </div>
      <header>
        <a className="brand" href="#" aria-label="Demir Catering ana sayfa">
          <img
            src="/assets/logo.jpg"
            alt="Demir Catering logosu"
            width={1254}
            height={1254}
            decoding="async"
          />
          <span>
            DEMİR <small>CATERING</small>
          </span>
        </a>
        <button
          id="nav-toggle"
          className="nav-toggle"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          aria-controls="nav"
        >
          Menü ☰
        </button>
        <nav
          id="nav"
          className={open ? "open" : ""}
          onClick={() => setOpen(false)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
          }}
        >
          <a href="#hizmetler">Hizmetlerimiz</a>
          <a href="#menuler">Menüler &amp; Fiyatlar</a>
          <a href="#nasil">Nasıl çalışır?</a>
          <a href="#iletisim">İletişim</a>
        </nav>
        <a className="button small header-cta" href="#teklif">
          Teklif alın <span>→</span>
        </a>
      </header>
    </>
  );
}

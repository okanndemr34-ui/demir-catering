"use client";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    function outside(event: PointerEvent) {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    }
    const wide = window.matchMedia("(min-width: 761px)");
    const close = () => setOpen(false);
    document.addEventListener("keydown", escape);
    document.addEventListener("pointerdown", outside);
    wide.addEventListener("change", close);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-110px 0px -55% 0px" },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((section) => observer.observe(section));
    return () => {
      document.removeEventListener("keydown", escape);
      document.removeEventListener("pointerdown", outside);
      wide.removeEventListener("change", close);
      observer.disconnect();
    };
  }, []);
  return (
    <header ref={header}>
      <a
        className="brand"
        href="#top"
        aria-label="Demir Catering ana sayfa"
        onClick={() => setOpen(false)}
      >
        <span className="logo-window">
          <img
            src="/assets/logo.png"
            alt="Demir Catering logosu"
            width="100"
            height="149"
          />
        </span>
      </a>
      <nav id="navigation" className={open ? "open" : ""} aria-label="Ana menü">
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            aria-current={active === item.href ? "location" : undefined}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href="#teklif" onClick={() => setOpen(false)}>
        Fiyat bilgisi alın <span aria-hidden="true">→</span>
      </a>
      <button
        ref={toggle}
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="navigation"
        aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>
    </header>
  );
}

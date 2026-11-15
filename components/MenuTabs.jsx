"use client";
import { useRef, useState } from "react";
import { useQuote } from "./QuoteProvider";
const tabs = [
  ["personel", "Personel yemeği"],
  ["mevlut", "Mevlüt menüleri"],
  ["ozel", "Özel organizasyon"],
];
export default function MenuTabs({ heading, panels }) {
  const [active, setActive] = useState(0);
  const buttons = useRef([]);
  const { choosePackage } = useQuote();
  function navigate(e, index) {
    const next =
      e.key === "Home"
        ? 0
        : e.key === "End"
          ? 2
          : e.key === "ArrowRight"
            ? (index + 1) % 3
            : e.key === "ArrowLeft"
              ? (index + 2) % 3
              : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    buttons.current[next].focus();
  }
  return (
    <section
      id="menuler"
      className="section menu-section"
      onClick={(e) => {
        const button = e.target.closest("[data-select]");
        if (button) choosePackage(button.dataset.select);
      }}
    >
      {heading}
      <div className="tabs" role="tablist" aria-label="Menü türü">
        {tabs.map(([key, title], i) => (
          <button
            key={key}
            ref={(node) => {
              buttons.current[i] = node;
            }}
            role="tab"
            id={`${key}-tab`}
            aria-controls={`${key}-panel`}
            aria-selected={active === i}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => navigate(e, i)}
          >
            {title}
          </button>
        ))}
      </div>
      {panels.map((panel, i) => (
        <div key={tabs[i][0]} hidden={active !== i}>
          {panel}
        </div>
      ))}
    </section>
  );
}

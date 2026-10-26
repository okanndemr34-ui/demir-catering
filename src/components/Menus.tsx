"use client";
import { useRef, useState, type KeyboardEvent } from "react";
import { menus } from "@/data/menus";
import { whatsappUrl } from "@/data/site";
import { Reveal } from "./Reveal";
export function Menus() {
  const [selected, setSelected] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const menu = menus[selected];
  function onKeyDown(event: KeyboardEvent, index: number) {
    let next = index;
    if (["ArrowDown", "ArrowRight"].includes(event.key))
      next = (index + 1) % menus.length;
    else if (["ArrowUp", "ArrowLeft"].includes(event.key))
      next = (index + menus.length - 1) % menus.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = menus.length - 1;
    else return;
    event.preventDefault();
    setSelected(next);
    tabs.current[next]?.focus();
  }
  return (
    <section
      className="section menus"
      id="menuler"
      aria-labelledby="menus-title"
    >
      <Reveal className="section-top">
        <div>
          <div className="eyebrow">03 / SOFRANIZA İLHAM</div>
          <h2 id="menus-title">
            Güzel bir buluşma,
            <br />
            güzel bir <em>menüyle başlar.</em>
          </h2>
        </div>
        <p>
          Aşağıdaki menüler planlama için örnektir.
          <br />
          İçerik ve fiyat, talebinize göre netleştirilir.
        </p>
      </Reveal>
      <Reveal className="menu-layout">
        <div className="menu-tabs" role="tablist" aria-label="Örnek menü türü">
          {menus.map((item, index) => (
            <button
              key={item.label}
              ref={(node) => {
                tabs.current[index] = node;
              }}
              role="tab"
              id={`tab-${index}`}
              aria-selected={selected === index}
              aria-controls="menu-panel"
              tabIndex={selected === index ? 0 : -1}
              onClick={() => setSelected(index)}
              onKeyDown={(event) => onKeyDown(event, index)}
            >
              {item.label}
              <span aria-hidden="true">↗</span>
            </button>
          ))}
        </div>
        <div
          id="menu-panel"
          className="menu-panel"
          role="tabpanel"
          aria-labelledby={`tab-${selected}`}
          tabIndex={0}
        >
          <span className="eyebrow">
            ÖRNEK MENÜ · {String(selected + 1).padStart(2, "0")}
          </span>
          <h3>{menu.title}</h3>
          <ul>
            {menu.items.map(([label, value]) => (
              <li key={label}>
                <span>{label}</span>
                {value}
              </li>
            ))}
          </ul>
          <a
            className="text-link"
            href={whatsappUrl(
              `Merhaba Demir Catering, ${menu.inquiry} için fiyat bilgisi almak istiyorum.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Bu menü için fiyat bilgisi alın →
          </a>
        </div>
      </Reveal>
    </section>
  );
}

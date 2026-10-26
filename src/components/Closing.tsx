import { site } from "@/data/site";
export function Closing() {
  return (
    <section className="closing">
      <div className="eyebrow">DEMİR CATERING</div>
      <h2>Aynı sofrada buluşmak üzere.</h2>
      <a href={site.phoneHref}>
        Fiyat bilgisi için arayın · {site.phone} <span>→</span>
      </a>
    </section>
  );
}

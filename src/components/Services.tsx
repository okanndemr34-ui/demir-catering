import { services } from "@/data/services";
import { Reveal } from "./Reveal";
export function Services() {
  return (
    <section
      className="services section"
      id="hizmetler"
      aria-labelledby="services-title"
    >
      <Reveal className="section-top">
        <div>
          <div className="eyebrow">01 / HİZMETLERİMİZ</div>
          <h2 id="services-title">
            Her buluşmaya
            <br />
            yakışan bir <em>sofra.</em>
          </h2>
        </div>
        <p>
          İster iş gününün öğle molası, ister hayatınızın
          <br />
          en özel daveti. İhtiyacınızı birlikte planlayalım.
        </p>
      </Reveal>
      <div className="service-grid">
        {services.map((service, index) => (
          <a
            className="service-card"
            key={service.title}
            href="#teklif"
            data-service={index === 2 ? "Nişan ve düğün yemeği" : service.title}
          >
            <div className="card-image">
              <img
                src={service.image}
                alt={service.alt}
                loading="lazy"
                decoding="async"
              />
              <span>{String(index + 1).padStart(2, "0")}</span>
              <b aria-hidden="true">↗</b>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <span className="card-foot">{service.category}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

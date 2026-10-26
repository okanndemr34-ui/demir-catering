import { faqs } from "@/data/faqs";
export function Faq() {
  return (
    <section className="section faq" aria-labelledby="faq-title">
      <div>
        <div className="eyebrow">MERAK ETTİKLERİNİZ</div>
        <h2 id="faq-title">
          Detayları <br />
          <em>konuşalım.</em>
        </h2>
      </div>
      <div className="faq-list">
        {faqs.map((item) => (
          <details key={item.question}>
            <summary>
              {item.question}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

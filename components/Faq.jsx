import { faq } from "../lib/faq";
export default function Faq() {
  return (
    <>
      <section className="section faq">
        <div>
          <p className="eyebrow">05 / MERAK EDİLENLER</p>
          <h2>
            Aklınızda
            <br />
            soru kalmasın.
          </h2>
        </div>
        <div>
          {faq.map(({ question, answer }) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

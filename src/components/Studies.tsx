import { certifications, education, profile } from "../data/cv.ts";

export function Studies() {
  return (
    <section id="education" className="section">
      <h2>Education & certifications</h2>
      <div className="cards">
        <article className="card">
          <span className="kind kind--academic">{education.period}</span>
          <h3>{education.degree}</h3>
          <p className="card__tagline">{education.school}</p>
          <p>{education.note}</p>
        </article>
        {certifications.map((c) => (
          <article key={c.name} className="card">
            <span className="kind">{c.date}</span>
            <h3>{c.name}</h3>
            <p className="card__tagline">{c.issuer} · online course</p>
          </article>
        ))}
        <article className="card">
          <span className="kind">Languages</span>
          <h3>{profile.languages.join(" · ")}</h3>
        </article>
      </div>
    </section>
  );
}

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
            <p className="card__tagline">
              {c.issuer} · {c.platform ?? "online course"}
              {c.hours && ` · ${c.hours} hours`}
            </p>
            {c.image && (
              <a className="cert__thumb" href={c.url ?? c.image} target="_blank" rel="noreferrer">
                <img src={c.image} alt={`${c.name} certificate of completion`} loading="lazy" />
              </a>
            )}
            {c.url && (
              <div className="links">
                <a className="btn" href={c.url} target="_blank" rel="noreferrer">
                  Verify certificate ↗
                </a>
              </div>
            )}
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

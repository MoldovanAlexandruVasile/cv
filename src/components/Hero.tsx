import { jobs, profile, projects } from "../data/cv.ts";

const stats = [
  { value: "7+", label: "years at Zenitech" },
  { value: String(jobs.length), label: "roles, intern to lead" },
  { value: String(projects.length), label: "projects featured" },
];

export function Hero() {
  return (
    <section className="hero" id="top">
      <p className="eyebrow">{profile.location}</p>
      <h1>
        {profile.name.split(" ")[0]}
        <br />
        <span className="accent">{profile.name.split(" ").slice(1).join(" ")}</span>
      </h1>
      <p className="hero__role">{profile.role}</p>
      <p className="hero__summary">{profile.summary}</p>
      <div className="hero__actions">
        <a className="btn btn--primary" href={`mailto:${profile.email}`}>
          Get in touch
        </a>
        <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="btn" href="#projects">
          See projects ↓
        </a>
      </div>
      <dl className="stats">
        {stats.map((s) => (
          <div key={s.label}>
            <dt>{s.value}</dt>
            <dd>{s.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

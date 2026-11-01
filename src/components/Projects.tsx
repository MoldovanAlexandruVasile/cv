import { useState } from "react";
import { projects, type Project } from "../data/cv.ts";
import { Tags } from "./Tags.tsx";

type Props = { selected: string | null; onSelect: (s: string) => void };

const filters = [
  ["all", "All"],
  ["personal", "Personal"],
  ["professional", "Professional"],
  ["academic", "Academic"],
] as const;
type Filter = (typeof filters)[number][0];

export function Projects({ selected, onSelect }: Props) {
  const [filter, setFilter] = useState<Filter>("all");
  const shown = projects.filter((p) => filter === "all" || p.kind === filter);
  const featured = shown.filter((p) => p.images);
  const rest = shown.filter((p) => !p.images);
  const dim = (p: Project) => (selected && !p.tags.includes(selected) ? " is-dim" : "");
  const hit = (p: Project) => (selected && p.tags.includes(selected) ? " is-match" : "");

  return (
    <section id="projects" className="section">
      <div className="section__row">
        <h2>Projects</h2>
        <div className="segmented" role="tablist">
          {filters.map(([value, label]) => (
            <button
              key={value}
              role="tab"
              aria-selected={filter === value}
              className={filter === value ? "on" : ""}
              onClick={() => setFilter(value)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {featured.map((p) => (
        <article key={p.id} className={`featured${dim(p)}${hit(p)}`}>
          <Gallery images={p.images!} />
          <div className="featured__text">
            <span className={`kind kind--${p.kind}`}>{p.kind} project</span>
            <h3>{p.name}</h3>
            <p className="featured__tagline">{p.tagline}</p>
            <p>{p.description}</p>
            <Tags tags={p.tags} selected={selected} onSelect={onSelect} />
            <Links project={p} />
          </div>
        </article>
      ))}

      <div className="cards">
        {rest.map((p) => (
          <article key={p.id} className={`card${dim(p)}${hit(p)}`}>
            <span className={`kind kind--${p.kind}`}>{p.kind}</span>
            <h3>{p.name}</h3>
            <p className="card__tagline">{p.tagline}</p>
            <p>{p.description}</p>
            <Tags tags={p.tags} selected={selected} onSelect={onSelect} />
            <Links project={p} />
          </article>
        ))}
      </div>
    </section>
  );
}

function Links({ project }: { project: Project }) {
  if (!project.links) return null;
  return (
    <div className="links">
      {project.links.map((l, i) => (
        <a key={l.href} className={i === 0 ? "btn btn--primary" : "btn"} href={l.href} target="_blank" rel="noreferrer">
          {l.label} ↗
        </a>
      ))}
    </div>
  );
}

function Gallery({ images }: { images: NonNullable<Project["images"]> }) {
  const [i, setI] = useState(0);
  const go = (d: number) => setI((cur) => (cur + d + images.length) % images.length);
  return (
    <div className="gallery">
      <div className="gallery__frame">
        {images.map((img, n) => (
          <img key={img.src} src={img.src} alt={img.alt} className={n === i ? "on" : ""} loading="lazy" />
        ))}
        <button className="gallery__nav gallery__nav--prev" onClick={() => go(-1)} aria-label="Previous screenshot">
          ‹
        </button>
        <button className="gallery__nav gallery__nav--next" onClick={() => go(1)} aria-label="Next screenshot">
          ›
        </button>
      </div>
      <div className="gallery__dots">
        {images.map((img, n) => (
          <button
            key={img.src}
            className={n === i ? "on" : ""}
            onClick={() => setI(n)}
            aria-label={`Show ${img.alt}`}
          />
        ))}
      </div>
    </div>
  );
}

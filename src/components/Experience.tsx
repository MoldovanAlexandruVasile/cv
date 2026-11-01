import { useState } from "react";
import { jobs } from "../data/cv.ts";
import { Tags } from "./Tags.tsx";

type Props = { selected: string | null; onSelect: (s: string) => void };

export function Experience({ selected, onSelect }: Props) {
  const [open, setOpen] = useState<string | null>(jobs[0].id);

  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      <ol className="timeline">
        {jobs.map((job) => {
          const isOpen = open === job.id;
          const match = selected ? job.tags.includes(selected) : null;
          return (
            <li
              key={job.id}
              className={`job${isOpen ? " job--open" : ""}${match === false ? " is-dim" : ""}${match ? " is-match" : ""}`}
            >
              <button
                className="job__head"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : job.id)}
              >
                <span className="job__dates">
                  {job.start} – {job.end}
                </span>
                <span className="job__title">
                  {job.title} <span className="muted">@ {job.company}</span>
                </span>
                <span className="job__headline">{job.headline}</span>
                <span className="job__chevron" aria-hidden>
                  ›
                </span>
              </button>
              <div className="job__body">
                <div>
                  <ul className="job__points">
                    {job.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <Tags tags={job.tags} selected={selected} onSelect={onSelect} />
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

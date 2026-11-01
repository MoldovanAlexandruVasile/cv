import { jobs, projects, skillGroups } from "../data/cv.ts";
import { Tags } from "./Tags.tsx";

type Props = { selected: string | null; onSelect: (s: string) => void };

export function Skills({ selected, onSelect }: Props) {
  const roles = selected ? jobs.filter((j) => j.tags.includes(selected)).length : 0;
  const builds = selected ? projects.filter((p) => p.tags.includes(selected)).length : 0;

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <p className="section__hint">
        {selected ? (
          <>
            <strong>{selected}</strong>: used in {roles} role{roles === 1 ? "" : "s"} and {builds} project
            {builds === 1 ? "" : "s"}, highlighted below.{" "}
            <button className="link-btn" onClick={() => onSelect(selected)}>
              Clear
            </button>
          </>
        ) : (
          "Pick a skill to highlight where I've used it."
        )}
      </p>
      <div className="skills">
        {skillGroups.map((g) => (
          <div key={g.name} className="skills__group">
            <h3>{g.name}</h3>
            <Tags tags={g.skills} selected={selected} onSelect={onSelect} />
          </div>
        ))}
      </div>
    </section>
  );
}

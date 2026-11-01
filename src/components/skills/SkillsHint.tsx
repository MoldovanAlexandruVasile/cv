import { jobs } from "../../data/jobs.ts";
import { projects } from "../../data/projects.ts";
import type { SkillFilterProps } from "../../types/skillFilter.ts";
import { pluralize } from "../../utils/pluralize.ts";
import { countWithSkill } from "../../utils/skillMatch.ts";

const HINT = "mb-6 min-h-[1.6em] text-muted";

export const SkillsHint = ({ selected, onSelect }: SkillFilterProps) => {
  if (!selected) {
    return <p className={HINT}>Pick a skill to highlight where I've used it.</p>;
  }

  const roles = countWithSkill(jobs, selected);
  const builds = countWithSkill(projects, selected);

  return (
    <p className={HINT}>
      <strong className="text-ink">{selected}</strong>: used in {roles} {pluralize(roles, "role")} and {builds}{" "}
      {pluralize(builds, "project")}, highlighted below.{" "}
      <button className="text-accent underline" onClick={() => onSelect(selected)}>
        Clear
      </button>
    </p>
  );
};

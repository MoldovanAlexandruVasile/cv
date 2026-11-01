import { jobs } from "../../data/jobs.ts";
import { projects } from "../../data/projects.ts";
import { pluralize } from "../../utils/pluralize.ts";
import { countWithSkill } from "../../utils/skillMatch.ts";

type SkillUsageProps = {
  skill: string;
};

export const SkillUsage = ({ skill }: SkillUsageProps) => {
  const roles = countWithSkill(jobs, skill);
  const builds = countWithSkill(projects, skill);

  return (
    <>
      <strong className="text-ink">{skill}</strong>: used in {roles} {pluralize(roles, "role")} and {builds}{" "}
      {pluralize(builds, "project")}, highlighted below.
    </>
  );
};

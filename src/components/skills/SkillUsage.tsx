import { useTranslation } from "react-i18next";
import { jobs } from "../../data/jobs.ts";
import { projects } from "../../data/projects.ts";
import { countWithSkill } from "../../utils/skillMatch.ts";

type SkillUsageProps = {
  skill: string;
};

export const SkillUsage = ({ skill }: SkillUsageProps) => {
  const { t } = useTranslation();
  const roles = t("skills.roles", { count: countWithSkill(jobs, skill) });
  const builds = t("skills.projects", { count: countWithSkill(projects, skill) });

  return (
    <>
      <strong className="text-ink">{skill}</strong>: {t("skills.usage", { roles, projects: builds })}
    </>
  );
};

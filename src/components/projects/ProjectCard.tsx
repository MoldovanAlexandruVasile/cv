import { useContent } from "../../hooks/useContent.ts";
import type { Project } from "../../types/cv.ts";
import type { SkillFilterProps } from "../../types/skillFilter.ts";
import { skillMatchClass } from "../../utils/skillMatch.ts";
import { Card } from "../common/Card.tsx";
import { Tags } from "../common/Tags.tsx";
import { ProjectLinks } from "./ProjectLinks.tsx";
import { ProjectSummary } from "./ProjectSummary.tsx";

type ProjectCardProps = SkillFilterProps & {
  project: Project;
};

export const ProjectCard = ({ project, selected, onSelect }: ProjectCardProps) => {
  const text = useContent().projects[project.id];

  return (
    <Card stateClass={skillMatchClass(project.tags, selected)}>
      <ProjectSummary kind={project.kind} text={text} />
      <Tags tags={project.tags} selected={selected} onSelect={onSelect} />
      <ProjectLinks links={project.links} labels={text.links} className="mt-auto pt-5" />
    </Card>
  );
};

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

export const ProjectCard = ({ project, selected, onSelect }: ProjectCardProps) => (
  <Card stateClass={skillMatchClass(project.tags, selected)}>
    <ProjectSummary project={project} />
    <Tags tags={project.tags} selected={selected} onSelect={onSelect} />
    <ProjectLinks links={project.links} className="mt-auto pt-5" />
  </Card>
);

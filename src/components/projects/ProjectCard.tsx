import { CARD_TAGLINE, CARD_TEXT } from "../../styles/ui.ts";
import type { Project } from "../../types/cv.ts";
import type { SkillFilterProps } from "../../types/skillFilter.ts";
import { skillMatchClass } from "../../utils/skillMatch.ts";
import { Card } from "../common/Card.tsx";
import { KindLabel } from "../common/KindLabel.tsx";
import { Tags } from "../common/Tags.tsx";
import { ProjectLinks } from "./ProjectLinks.tsx";

type ProjectCardProps = SkillFilterProps & {
  project: Project;
};

export const ProjectCard = ({ project, selected, onSelect }: ProjectCardProps) => (
  <Card stateClass={skillMatchClass(project.tags, selected)}>
    <KindLabel variant={project.kind}>{project.kind}</KindLabel>
    <h3 className="mt-1.5 text-xl font-bold">{project.name}</h3>
    <p className={CARD_TAGLINE}>{project.tagline}</p>
    <p className={CARD_TEXT}>{project.description}</p>
    <Tags tags={project.tags} selected={selected} onSelect={onSelect} />
    <ProjectLinks links={project.links} className="mt-auto pt-5" />
  </Card>
);

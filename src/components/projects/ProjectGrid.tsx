import type { Project } from "../../types/cv.ts";
import type { SkillFilterProps } from "../../types/skillFilter.ts";
import { CardGrid } from "../common/CardGrid.tsx";
import { ProjectCard } from "./ProjectCard.tsx";

type ProjectGridProps = SkillFilterProps & {
  projects: Project[];
};

export const ProjectGrid = ({ projects, selected, onSelect }: ProjectGridProps) => (
  <CardGrid>
    {projects.map((project) => (
      <ProjectCard key={project.id} project={project} selected={selected} onSelect={onSelect} />
    ))}
  </CardGrid>
);

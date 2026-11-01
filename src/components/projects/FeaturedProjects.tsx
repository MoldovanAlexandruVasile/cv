import type { Project } from "../../types/cv.ts";
import type { SkillFilterProps } from "../../types/skillFilter.ts";
import { FeaturedProject } from "./FeaturedProject.tsx";

type FeaturedProjectsProps = SkillFilterProps & {
  projects: Project[];
};

export const FeaturedProjects = ({ projects, selected, onSelect }: FeaturedProjectsProps) =>
  projects.map((project) => (
    <FeaturedProject key={project.id} project={project} selected={selected} onSelect={onSelect} />
  ));

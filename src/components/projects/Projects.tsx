import { projects } from "../../data/projects.ts";
import { useProjectFilter } from "../../hooks/useProjectFilter.ts";
import type { SkillFilterProps } from "../../types/skillFilter.ts";
import { Section } from "../common/Section.tsx";
import { FeaturedProjects } from "./FeaturedProjects.tsx";
import { ProjectFilters } from "./ProjectFilters.tsx";
import { ProjectGrid } from "./ProjectGrid.tsx";

export const Projects = ({ selected, onSelect }: SkillFilterProps) => {
  const { filter, setFilter, featured, rest } = useProjectFilter(projects);

  return (
    <Section id="projects" title="Projects" aside={<ProjectFilters value={filter} onChange={setFilter} />}>
      <FeaturedProjects projects={featured} selected={selected} onSelect={onSelect} />
      <ProjectGrid projects={rest} selected={selected} onSelect={onSelect} />
    </Section>
  );
};

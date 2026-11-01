import { useState } from "react";
import type { ProjectFilter } from "../../constants/projectFilters.ts";
import { projects } from "../../data/projects.ts";
import { CARD_GRID } from "../../styles/ui.ts";
import type { SkillFilterProps } from "../../types/skillFilter.ts";
import { Section } from "../common/Section.tsx";
import { FeaturedProject } from "./FeaturedProject.tsx";
import { ProjectCard } from "./ProjectCard.tsx";
import { ProjectFilters } from "./ProjectFilters.tsx";

export const Projects = ({ selected, onSelect }: SkillFilterProps) => {
  const [filter, setFilter] = useState<ProjectFilter>("all");

  const shown = projects.filter((project) => filter === "all" || project.kind === filter);
  // Projects with screenshots get the large layout with a gallery.
  const featured = shown.filter((project) => project.images);
  const rest = shown.filter((project) => !project.images);

  return (
    <Section id="projects" title="Projects" aside={<ProjectFilters value={filter} onChange={setFilter} />}>
      {featured.map((project) => (
        <FeaturedProject key={project.id} project={project} selected={selected} onSelect={onSelect} />
      ))}
      <div className={CARD_GRID}>
        {rest.map((project) => (
          <ProjectCard key={project.id} project={project} selected={selected} onSelect={onSelect} />
        ))}
      </div>
    </Section>
  );
};

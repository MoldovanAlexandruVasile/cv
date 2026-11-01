import type { ProjectFilter } from "../constants/projectFilters.ts";
import type { Project, ProjectImage } from "../types/cv.ts";

export const filterProjects = (projects: Project[], filter: ProjectFilter) =>
  filter === "all" ? projects : projects.filter((project) => project.kind === filter);

// Projects with screenshots get the large layout with a gallery.
export const splitFeatured = (projects: Project[]) => ({
  featured: projects.filter((project) => project.images),
  rest: projects.filter((project) => !project.images),
});

// Pairs image paths with their translated alt texts (same order).
export const withAltText = (sources: string[] = [], alts: string[] = []): ProjectImage[] =>
  sources.map((src, i) => ({ src, alt: alts[i] ?? "" }));

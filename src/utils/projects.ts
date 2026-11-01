import type { ProjectFilter } from "../constants/projectFilters.ts";
import type { Project } from "../types/cv.ts";

export const filterProjects = (projects: Project[], filter: ProjectFilter) =>
  filter === "all" ? projects : projects.filter((project) => project.kind === filter);

// Projects with screenshots get the large layout with a gallery.
export const splitFeatured = (projects: Project[]) => ({
  featured: projects.filter((project) => project.images),
  rest: projects.filter((project) => !project.images),
});

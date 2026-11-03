import type { LanguageCode } from "../constants/languages.ts";
import type { ProjectFilter } from "../constants/projectFilters.ts";
import type { Project, ProjectImage } from "../types/cv.ts";

export const filterProjects = (projects: Project[], filter: ProjectFilter) =>
  filter === "all" ? projects : projects.filter((project) => project.kind === filter);

// Projects with screenshots get the large layout with a gallery.
export const splitFeatured = (projects: Project[]) => ({
  featured: projects.filter((project) => project.images),
  rest: projects.filter((project) => !project.images),
});

// Screenshots in the page's language: public/media/<language>/ holds the
// translated copies (same names); English ones are in public/media/.
const inLanguage = (src: string, language: LanguageCode) =>
  language === "en" ? src : src.replace(/^media\//, `media/${language}/`);

// Pairs image paths with their translated alt texts (same order).
export const withAltText = (
  sources: string[] = [],
  alts: string[] = [],
  language: LanguageCode,
): ProjectImage[] => sources.map((src, i) => ({ src: inLanguage(src, language), alt: alts[i] ?? "" }));

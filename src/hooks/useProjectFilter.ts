import { useState } from "react";
import type { ProjectFilter } from "../constants/projectFilters.ts";
import type { Project } from "../types/cv.ts";
import { filterProjects, splitFeatured } from "../utils/projects.ts";

export const useProjectFilter = (projects: Project[]) => {
  const [filter, setFilter] = useState<ProjectFilter>("all");
  const { featured, rest } = splitFeatured(filterProjects(projects, filter));

  return { filter, setFilter, featured, rest };
};

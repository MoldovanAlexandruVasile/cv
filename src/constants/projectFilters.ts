import type { ProjectKind } from "../types/cv.ts";

export type ProjectFilter = "all" | ProjectKind;

export const PROJECT_FILTERS: { value: ProjectFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "personal", label: "Personal" },
  { value: "professional", label: "Professional" },
  { value: "academic", label: "Academic" },
];

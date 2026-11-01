import type { ProjectKind } from "../types/cv.ts";

export type ProjectFilter = "all" | ProjectKind;

export const PROJECT_FILTERS: ProjectFilter[] = ["all", "personal", "professional", "academic"];

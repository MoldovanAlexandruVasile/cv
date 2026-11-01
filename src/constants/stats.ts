import { jobs } from "../data/jobs.ts";
import { projects } from "../data/projects.ts";

export const STATS = [
  { value: "7+", label: "years in frontend" },
  { value: String(jobs.length), label: "roles, intern to lead" },
  { value: String(projects.length), label: "projects featured" },
];

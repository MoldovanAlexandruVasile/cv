import { jobs } from "../data/jobs.ts";
import { projects } from "../data/projects.ts";

export type StatId = "years" | "roles" | "projects";

export const STATS: { id: StatId; value: string }[] = [
  { id: "years", value: "7+" },
  { id: "roles", value: String(jobs.length) },
  { id: "projects", value: String(projects.length) },
];

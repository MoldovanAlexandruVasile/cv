import { jobs } from "../data/jobs.ts";
import { projects } from "../data/projects.ts";

export type StatId = "years" | "roles" | "projects";

export type Stat = {
  id: StatId;
  value: string;
};

// Every number is derived: years from the career start and today's date, roles
// and projects from the data lists, so adding an entry updates the header.
export const buildStats = (years: number): Stat[] => [
  { id: "years", value: `${years}+` },
  { id: "roles", value: String(jobs.length) },
  { id: "projects", value: String(projects.length) },
];

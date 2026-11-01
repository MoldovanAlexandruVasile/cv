import type { SkillGroup } from "../types/cv.ts";

// Skill names are technologies, so they stay the same in every language.
export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    skills: ["TypeScript", "React", "React Router", "Vite", "VueJS", "React Native", "Electron"],
  },
  { id: "styling", skills: ["Material-UI", "Tailwind CSS", "Shadcn/UI", "WCAG"] },
  { id: "data", skills: ["TanStack Query", "GraphQL", "Axios", "WebSockets"] },
  { id: "state", skills: ["Jotai", "Redux", "Recoil"] },
  { id: "testing", skills: ["Vitest", "Jest", "Cypress"] },
  { id: "leadership", skills: ["People Lead", "Team Management"] },
];

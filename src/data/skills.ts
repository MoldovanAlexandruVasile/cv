import type { SkillGroup } from "../types/cv.ts";

export const skillGroups: SkillGroup[] = [
  {
    name: "Frontend",
    skills: [
      "TypeScript",
      "React",
      "React Router",
      "Vite",
      "VueJS",
      "React Native",
      "Electron",
    ],
  },
  {
    name: "Styling & UI",
    skills: ["Material-UI", "Tailwind CSS", "Shadcn/UI", "WCAG"],
  },
  {
    name: "Data & APIs",
    skills: ["TanStack Query", "GraphQL", "Axios", "WebSockets"],
  },
  { name: "State", skills: ["Jotai", "Redux", "Recoil"] },
  { name: "Testing", skills: ["Vitest", "Jest", "Cypress"] },
  { name: "Leadership", skills: ["People Lead", "Team Management"] },
];

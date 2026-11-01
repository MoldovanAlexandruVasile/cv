import type { Project } from "../types/cv.ts";

export const projects: Project[] = [
  {
    id: "shiftify",
    kind: "personal",
    tags: ["React Native", "Expo", "Electron", "TypeScript", "React", "Vite", "SQLite", "Jotai", "i18next"],
    links: [
      { id: "website", href: "https://moldovanalexandruvasile.github.io/shiftify-website/" },
      { id: "source", href: "https://github.com/MoldovanAlexandruVasile/shiftify-website" },
    ],
    // Alt texts are in content.projects.shiftify.images, in the same order.
    images: [
      "media/01-check-in.jpg",
      "media/02-month-at-a-glance.jpg",
      "media/05-export.jpg",
      "media/06-dark-mode.jpg",
    ],
  },
  {
    id: "healthcare-portal",
    kind: "professional",
    tags: ["React", "TypeScript", "Jotai", "TanStack Query", "GraphQL", "Tailwind CSS", "WCAG"],
  },
  {
    id: "dev-tool",
    kind: "professional",
    tags: ["React", "TypeScript", "Cypress", "Jenkins"],
  },
  {
    id: "backoffice",
    kind: "professional",
    tags: ["React", "TypeScript", "Material-UI", "Jest", "Cypress"],
  },
  {
    id: "accu",
    kind: "academic",
    tags: ["Android", "Java"],
    links: [{ id: "source", href: "https://github.com/MoldovanAlexandruVasile/Licenta" }],
  },
];

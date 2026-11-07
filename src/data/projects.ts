import type { Project } from "../types/cv.ts";

export const projects: Project[] = [
  {
    id: "tivren",
    kind: "personal",
    tags: ["React Native", "Expo", "Electron", "TypeScript", "React", "Vite", "SQLite", "Jotai", "i18next"],
    links: [
      { id: "website", href: "https://tivren.netlify.app/" },
      { id: "source", href: "https://github.com/MoldovanAlexandruVasile/tivren-website" },
    ],
    // Alt texts are in content.projects.tivren.images, in the same order.
    images: [
      "media/01-check-in.jpg",
      "media/02-month-at-a-glance.jpg",
      "media/05-export.jpg",
      "media/06-dark-mode.jpg",
    ],
  },
  {
    id: "casita",
    kind: "personal",
    tags: ["React Native", "Expo", "TypeScript", "SQLite", "TanStack Query", "Jotai", "i18next", "React", "Vite", "Tailwind CSS"],
    links: [
      { id: "website", href: "https://casita-budget.netlify.app/" },
      { id: "source", href: "https://github.com/MoldovanAlexandruVasile/casita-website" },
    ],
    // Alt texts are in content.projects.casita.images, in the same order.
    images: [
      "media/casita/01-plan.jpg",
      "media/casita/02-whats-left.jpg",
      "media/casita/04-savings.jpg",
      "media/casita/06-dark-mode.jpg",
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

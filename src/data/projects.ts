import type { Project } from "../types/cv.ts";

const SHIFTIFY_SITE =
  "https://moldovanalexandruvasile.github.io/shiftify-website/";

export const projects: Project[] = [
  {
    id: "shiftify",
    name: "Shiftify",
    kind: "personal",
    tagline: "Timesheets for freelancers, without the spreadsheet.",
    description:
      "An offline timesheet app for freelancers: log the days you work per client, take days off, and export a monthly timesheet to Excel or PDF. Bank holidays are applied automatically and everything stays on the device: no account, no backend. Built with Expo / React Native for mobile and Electron for Mac and Windows, with a React + Vite marketing site that serves signed auto-updating releases.",
    tags: [
      "React Native",
      "Expo",
      "Electron",
      "TypeScript",
      "React",
      "Vite",
      "SQLite",
      "Jotai",
      "i18next",
    ],
    links: [
      { label: "Visit the website", href: SHIFTIFY_SITE },
      {
        label: "Website source",
        href: "https://github.com/MoldovanAlexandruVasile/shiftify-website",
      },
    ],
    images: [
      { src: "media/01-check-in.jpg", alt: "Shiftify daily check-in" },
      { src: "media/02-month-at-a-glance.jpg", alt: "Month at a glance" },
      { src: "media/05-export.jpg", alt: "Export to Excel or PDF" },
      { src: "media/06-dark-mode.jpg", alt: "Dark mode" },
    ],
  },
  {
    id: "healthcare-portal",
    name: "US Healthcare Member Portal",
    kind: "professional",
    tagline: "HIPAA-regulated, WCAG-compliant member portal.",
    description:
      "Portal-based architecture to preserve iframe state, multi-sticky-header layouts, a shared web/native toolkit and Sentry-backed feature flags.",
    tags: [
      "React",
      "TypeScript",
      "Jotai",
      "TanStack Query",
      "GraphQL",
      "Tailwind CSS",
      "WCAG",
    ],
  },
  {
    id: "dev-tool",
    name: "Release & Feature Dashboard",
    kind: "professional",
    tagline: "Internal developer tool.",
    description:
      "One place for developers and stakeholders to follow each feature's progress, jump to its deeplinks and tasks, kick off end-to-end test runs and switch features on or off through Jenkins jobs.",
    tags: ["React", "TypeScript", "Cypress", "Jenkins"],
  },
  {
    id: "backoffice",
    name: "Operations Back Office",
    kind: "professional",
    tagline: "Admin platform for a high-traffic consumer product.",
    description:
      "Used daily by operators to set up and edit content, build custom competitions for specific customers, and oversee payments and transactions.",
    tags: ["React", "TypeScript", "Material-UI", "Jest", "Cypress"],
  },
  {
    id: "accu",
    name: "ACCU: Accountability of Utilities",
    kind: "academic",
    tagline: "Bachelor's thesis, Android app.",
    description:
      "Tracks and manages monthly utility usage. Built for my graduation thesis at Babeș-Bolyai University.",
    tags: ["Android", "Java"],
    links: [
      {
        label: "Source on GitHub",
        href: "https://github.com/MoldovanAlexandruVasile/Licenta",
      },
    ],
  },
];

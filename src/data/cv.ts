// All CV content lives here, so updating the page never means touching components.

export const profile = {
  name: "Alexandru-Vasile Moldovan",
  role: "Senior Frontend Developer · Contractor",
  location: "Târgu Mureș, Romania",
  summary:
    "Frontend engineer with 7+ years building regulated, high-traffic web platforms for UK and US clients, now working as an independent contractor. I write React and TypeScript, shape architecture through ADRs, and have led and grown frontend teams as a People Lead.",
  email: "moldovan_alexandru97@yahoo.com",
  github: "https://github.com/MoldovanAlexandruVasile",
  languages: ["Romanian (native)", "English"],
  hiring: [
    { label: "Employee", detail: "CIM (Contract Individual de Muncă)" },
    { label: "Contractor", detail: "B2B / freelance" },
  ],
};

export type Job = {
  id: string;
  title: string;
  company: string;
  start: string;
  end: string;
  headline: string;
  points: string[];
  tags: string[];
};

export const jobs: Job[] = [
  {
    id: "gaming-factory",
    title: "Senior Frontend Developer · Contractor",
    company: "Gaming Factory Limited",
    start: "Nov 2026",
    end: "Present",
    headline:
      "Frontend development for an online sports betting and casino product",
    points: [
      "Develop player-facing features and integrate third-party services such as live video, in-play statistics and promotional content.",
      "Work on the operator tools behind the product: managing fixtures, games and tailored competitions, along with payments and bets.",
      "Create internal tooling that gives developers and stakeholders visibility into feature rollout and automated test runs.",
      "Deliver standalone landing pages for marketing campaigns.",
      "Keep the codebase healthy through reviews, unit and end-to-end testing, and performance work, and agree priorities directly with stakeholders.",
    ],
    tags: ["React", "TypeScript", "Material-UI", "Redux", "Jest", "Cypress"],
  },
  {
    id: "healthcare",
    title: "Senior Web Developer",
    company: "Zenitech",
    start: "Jan 2026",
    end: "Oct 2026",
    headline: "HIPAA-compliant member portal for a major US healthcare client",
    points: [
      "Guided our sub-team under the tech lead, built core features and wired them to backend endpoints.",
      "Authored key ADRs: a portal-based architecture with Jotai families and key-based rendering to preserve iframe state, and a layout strategy for multiple sticky headers.",
      "Enforced a feature-sliced module system with eslint-plugin-boundaries; contributed to a shared toolkit aligning the web and native apps.",
      "Got up to speed on WCAG quickly to deliver full accessibility compliance for a public-facing portal.",
      "Built a reusable feature-flag component on Sentry feature flags; Okta authentication; tests with Vitest and React Testing Library.",
    ],
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "React Router",
      "TanStack Query",
      "GraphQL",
      "Axios",
      "Jotai",
      "Tailwind CSS",
      "Shadcn/UI",
      "i18next",
      "Vitest",
      "Sentry",
      "Okta",
      "WCAG",
    ],
  },
  {
    id: "people-lead",
    title: "People Lead",
    company: "Zenitech",
    start: "Sep 2025",
    end: "Oct 2026",
    headline: "Growth and well-being of frontend developers",
    points: [
      "Supported frontend developers' growth and alignment with company goals.",
      "Ran performance reviews, addressed concerns and communicated company decisions transparently to build trust.",
    ],
    tags: ["People Lead", "Team Management"],
  },
  {
    id: "consumer-platform",
    title: "Web Developer",
    company: "Zenitech",
    start: "Sep 2019",
    end: "Dec 2025",
    headline: "High-traffic consumer web platform in a regulated UK market",
    points: [
      "Maintained and extended the main customer-facing app: moved class components to hooks, integrated live streaming, real-time data widgets, dynamic banners and reCAPTCHA.",
      "Built an internal developer tool to track feature status and deeplinks, trigger Cypress E2E runs and toggle features through Jenkins.",
      "Contributed to the back office: content management, custom competitions for specific customers, payments and transactions.",
      "Built a single-page app for marketing campaigns.",
      "Led and supported developers through code ownership, worked with stakeholders on priorities and ran technical interviews for React roles.",
    ],
    tags: [
      "React",
      "TypeScript",
      "Material-UI",
      "Redux",
      "Recoil",
      "React Router",
      "Jest",
      "Cypress",
      "WebSockets",
      "Team Management",
    ],
  },
  {
    id: "qa",
    title: "Manual & Automation QA · part time",
    company: "Zenitech",
    start: "Sep 2018",
    end: "Sep 2019",
    headline: "Mobile apps and backend services",
    points: [
      "Manual testing of Android and iOS apps for usability and stability.",
      "Automated testing of backend services and APIs in Java.",
    ],
    tags: ["Java", "QA"],
  },
  {
    id: "android-intern",
    title: "Android Developer · intern",
    company: "Zenitech",
    start: "Jun 2018",
    end: "Sep 2018",
    headline: "Foundations of Android development",
    points: [
      "Internship that laid the groundwork for my Bachelor's thesis app.",
    ],
    tags: ["Android", "Java"],
  },
  {
    id: "qa-intern",
    title: "Manual QA · intern",
    company: "Zenitech",
    start: "May 2017",
    end: "Jul 2017",
    headline: "Testing processes and defect reporting",
    points: [
      "First hands-on experience with QA practices on real software projects.",
    ],
    tags: ["QA"],
  },
];

export type Project = {
  id: string;
  name: string;
  kind: "personal" | "professional" | "academic";
  tagline: string;
  description: string;
  tags: string[];
  links?: { label: string; href: string }[];
  images?: { src: string; alt: string }[];
};

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

export const skillGroups: { name: string; skills: string[] }[] = [
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

export const education = {
  degree: "Bachelor's Degree in Programming",
  school:
    "Faculty of Mathematics and Computer Science, Babeș-Bolyai University",
  period: "2016 – 2019",
  note: "Java, Android, Python, Angular, C/C++ and Assembly. Thesis: ACCU, an Android app for tracking utility usage.",
};

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  platform?: string;
  hours?: number;
  url?: string;
  image?: string;
};

export const certifications: Certification[] = [
  {
    name: "React Native – The Practical Guide",
    issuer: "Maximilian Schwarzmüller",
    date: "Oct 2026",
    platform: "Udemy",
    hours: 28.5,
    url: "https://ude.my/UC-77345d4c-a8de-4293-b152-1deb576449f0",
    image:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-77345d4c-a8de-4293-b152-1deb576449f0.jpg",
  },
  {
    name: "Vue – The Complete Guide (incl. Router & Composition API)",
    issuer: "Maximilian Schwarzmüller",
    date: "Nov 2024",
    platform: "Udemy",
    hours: 32,
    url: "https://www.udemy.com/certificate/UC-cc1b62b4-f14e-4c0a-9e08-5ff1feea3cfa/",
    image:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-cc1b62b4-f14e-4c0a-9e08-5ff1feea3cfa.jpg",
  },
];

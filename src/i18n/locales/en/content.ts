// CV text, keyed by the ids used in src/data. Structured data (dates, tags,
// links, images) stays in src/data; only the words live here.
import type { CvContent } from "../../../types/content.ts";

export const content: CvContent = {
  profile: {
    role: "Senior Frontend Developer",
    location: "Târgu Mureș, Romania",
    summary:
      "Frontend engineer with {{years}} building regulated, high-traffic web platforms for UK and US clients, now working as an independent contractor. I write React and TypeScript, shape architecture through ADRs, and have led and grown frontend teams as a People Lead.",
    languages: ["Romanian (native)", "English"],
    hiring: {
      employee: {
        label: "Employee",
        detail: "CIM (Contract Individual de Muncă)",
      },
      contractor: { label: "Contractor", detail: "B2B / freelance" },
    },
  },
  jobs: {
    "gaming-factory": {
      title: "Senior Frontend Developer",
      headline:
        "Frontend development for an online sports betting and casino product",
      points: [
        "Develop player-facing features and integrate third-party services such as live video, in-play statistics and promotional content.",
        "Work on the operator tools behind the product: managing fixtures, games and tailored competitions, along with payments and bets.",
        "Create internal tooling that gives developers and stakeholders visibility into feature rollout and automated test runs.",
        "Deliver standalone landing pages for marketing campaigns.",
        "Keep the codebase healthy through reviews, unit and end-to-end testing, and performance work, and agree priorities directly with stakeholders.",
      ],
    },
    healthcare: {
      title: "Senior Frontend Developer",
      headline:
        "HIPAA-compliant member portal for a major US healthcare client",
      points: [
        "Guided our sub-team under the tech lead, built core features and wired them to backend endpoints.",
        "Authored key ADRs: a portal-based architecture with Jotai families and key-based rendering to preserve iframe state, and a layout strategy for multiple sticky headers.",
        "Enforced a feature-sliced module system with eslint-plugin-boundaries; contributed to a shared toolkit aligning the web and native apps.",
        "Got up to speed on WCAG quickly to deliver full accessibility compliance for a public-facing portal.",
        "Built a reusable feature-flag component on Sentry feature flags; Okta authentication; tests with Vitest and React Testing Library.",
      ],
    },
    "people-lead": {
      title: "People Lead",
      headline: "Growth and well-being of frontend developers",
      points: [
        "Supported frontend developers' growth and alignment with company goals.",
        "Ran performance reviews, addressed concerns and communicated company decisions transparently to build trust.",
      ],
    },
    "consumer-platform": {
      title: "Frontend Developer",
      headline: "High-traffic consumer web platform in a regulated UK market",
      points: [
        "Maintained and extended the main customer-facing app: moved class components to hooks, integrated live streaming, real-time data widgets, dynamic banners and reCAPTCHA.",
        "Built an internal developer tool to track feature status and deeplinks, trigger Cypress E2E runs and toggle features through Jenkins.",
        "Contributed to the back office: content management, custom competitions for specific customers, payments and transactions.",
        "Built a single-page app for marketing campaigns.",
        "Led and supported developers through code ownership, worked with stakeholders on priorities and ran technical interviews for React roles.",
      ],
    },
    qa: {
      title: "Manual & Automation QA · part time",
      headline: "Mobile apps and backend services",
      points: [
        "Manual testing of Android and iOS apps for usability and stability.",
        "Automated testing of backend services and APIs in Java.",
      ],
    },
    "android-intern": {
      title: "Android Developer · intern",
      headline: "Foundations of Android development",
      points: [
        "Internship that laid the groundwork for my Bachelor's thesis app.",
      ],
    },
    "qa-intern": {
      title: "Manual QA · intern",
      headline: "Testing processes and defect reporting",
      points: [
        "First hands-on experience with QA practices on real software projects.",
      ],
    },
  },
  projects: {
    tivren: {
      name: "Tivren",
      tagline: "Timesheets for freelancers, without the spreadsheet.",
      description:
        "An offline timesheet app for freelancers: log the days you work per client, take days off, and export a monthly timesheet to Excel or PDF. Bank holidays are applied automatically and everything stays on the device: no account, no backend. Built with Expo / React Native for mobile and Electron for Mac and Windows, with a React + Vite marketing site that serves signed auto-updating releases.",
      links: {
        website: "Visit the website",
        source: "Website source",
      },
      images: [
        "Tivren daily check-in",
        "Month at a glance",
        "Export to Excel or PDF",
        "Dark mode",
      ],
    },
    "healthcare-portal": {
      name: "US Healthcare Member Portal",
      tagline: "HIPAA-regulated, WCAG-compliant member portal.",
      description:
        "Portal-based architecture to preserve iframe state, multi-sticky-header layouts, a shared web/native toolkit and Sentry-backed feature flags.",
      links: {},
      images: [],
    },
    "dev-tool": {
      name: "Release & Feature Dashboard",
      tagline: "Internal developer tool.",
      description:
        "One place for developers and stakeholders to follow each feature's progress, jump to its deeplinks and tasks, kick off end-to-end test runs and switch features on or off through Jenkins jobs.",
      links: {},
      images: [],
    },
    backoffice: {
      name: "Operations Back Office",
      tagline: "Admin platform for a high-traffic consumer product.",
      description:
        "Used daily by operators to set up and edit content, build custom competitions for specific customers, and oversee payments and transactions.",
      links: {},
      images: [],
    },
    accu: {
      name: "ACCU: Accountability of Utilities",
      tagline: "Bachelor's thesis, Android app.",
      description:
        "Tracks and manages monthly utility usage. Built for my graduation thesis at Babeș-Bolyai University.",
      links: {
        source: "Source on GitHub",
      },
      images: [],
    },
  },
  skillGroups: {
    frontend: "Frontend",
    styling: "Styling & UI",
    data: "Data & APIs",
    state: "State",
    testing: "Testing",
    leadership: "Leadership",
  },
  education: {
    degree: "Bachelor's Degree in Programming",
    school:
      "Faculty of Mathematics and Computer Science, Babeș-Bolyai University",
    note: "Java, Android, Python, Angular, C/C++ and Assembly. Thesis: ACCU, an Android app for tracking utility usage.",
  },
  // Course titles are the official (English) names in every language.
  certifications: {
    "react-native": "React Native – The Practical Guide",
    vue: "Vue – The Complete Guide (incl. Router & Composition API)",
  },
};

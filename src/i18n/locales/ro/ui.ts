import type { UiMessages } from "../../types.ts";

// Romanian plurals: _one (1 rol), _few (2–19 roluri, and decimals such as 28,5 ore),
// _other (20 de roluri).
export const ui = {
  meta: {
    title: "Alexandru-Vasile Moldovan · Senior Frontend Developer",
    description:
      "Senior Frontend Developer. React, TypeScript și peste 7 ani de experiență în platforme web reglementate.",
  },
  nav: {
    skills: "Competențe",
    experience: "Experiență",
    projects: "Proiecte",
    education: "Educație",
  },
  theme: {
    switchTo: "Comută pe modul {{mode}}",
    light: "luminos",
    dark: "întunecat",
  },
  language: {
    label: "Limba",
  },
  hero: {
    availableAs: "Disponibil ca",
    github: "GitHub",
    seeProjects: "Vezi proiectele ↓",
    stats: {
      years: "ani în frontend",
      roles: "roluri, de la stagiar la lead",
      projects: "proiecte prezentate",
    },
  },
  contact: {
    trigger: "Contactează-mă",
    writeWith: "Scrie din {{app}}",
    apps: {
      gmail: "Gmail",
      outlook: "Outlook",
      emailApp: "aplicația de email",
    },
    copy: "Copiază adresa",
    copied: "Copiat ✓",
  },
  skills: {
    title: "Competențe",
    idle: "Alege o competență ca să vezi unde am folosit-o.",
    usage: "apare în {{roles}} și {{projects}}, evidențiate mai jos.",
    roles_one: "{{count}} rol",
    roles_few: "{{count}} roluri",
    roles_other: "{{count}} de roluri",
    projects_one: "{{count}} proiect",
    projects_few: "{{count}} proiecte",
    projects_other: "{{count}} de proiecte",
    clear: "Resetează",
  },
  experience: {
    title: "Experiență",
    present: "Prezent",
  },
  projects: {
    title: "Proiecte",
    filters: {
      all: "Toate",
      personal: "Personale",
      professional: "Profesionale",
      academic: "Academice",
    },
    kinds: {
      personal: "personal",
      professional: "profesional",
      academic: "academic",
    },
    featuredKind: "proiect {{kind}}",
  },
  gallery: {
    previous: "Captura anterioară",
    next: "Captura următoare",
    show: "Arată: {{label}}",
  },
  education: {
    title: "Educație și certificări",
    onlineCourse: "curs online",
    hours_one: "{{count, number}} oră",
    hours_few: "{{count, number}} ore",
    hours_other: "{{count, number}} de ore",
    verify: "Verifică certificatul ↗",
    certificateAlt: "Certificat de absolvire: {{name}}",
    languages: "Limbi",
  },
} satisfies UiMessages;

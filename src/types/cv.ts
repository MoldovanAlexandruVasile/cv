// Structured CV data. The words for each item live in the translations
// (src/i18n/locales/*/content.ts), keyed by the same ids.

export type Profile = {
  name: string;
  email: string;
  github: string;
  hiring: string[];
};

export type Job = {
  id: string;
  company: string;
  // "YYYY-MM"; no end means the role is current.
  start: string;
  end?: string;
  tags: string[];
};

export type ProjectKind = "personal" | "professional" | "academic";

export type ProjectLink = {
  id: string;
  href: string;
};

export type Project = {
  id: string;
  kind: ProjectKind;
  tags: string[];
  links?: ProjectLink[];
  images?: string[];
};

// An image with its translated alt text, ready to render.
export type ProjectImage = {
  src: string;
  alt: string;
};

export type SkillGroup = {
  id: string;
  skills: string[];
};

export type Education = {
  period: string;
};

export type Certification = {
  id: string;
  issuer: string;
  // "YYYY-MM"
  date: string;
  platform?: string;
  hours?: number;
  url?: string;
  image?: string;
};

export type HiringOption = {
  label: string;
  detail: string;
};

export type Profile = {
  name: string;
  role: string;
  location: string;
  summary: string;
  email: string;
  github: string;
  languages: string[];
  hiring: HiringOption[];
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

export type ProjectKind = "personal" | "professional" | "academic";

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  id: string;
  name: string;
  kind: ProjectKind;
  tagline: string;
  description: string;
  tags: string[];
  links?: ProjectLink[];
  images?: ProjectImage[];
};

export type SkillGroup = {
  name: string;
  skills: string[];
};

export type Education = {
  degree: string;
  school: string;
  period: string;
  note: string;
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

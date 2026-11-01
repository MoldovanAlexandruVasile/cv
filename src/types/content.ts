// Shape of the translated CV text (src/i18n/locales/*/content.ts).
// Records are keyed by the ids used in src/data.

export type HiringText = {
  label: string;
  detail: string;
};

export type JobText = {
  title: string;
  headline: string;
  points: string[];
};

export type ProjectText = {
  name: string;
  tagline: string;
  description: string;
  // Link labels by link id, and image alt texts in the same order as the images.
  links: Record<string, string>;
  images: string[];
};

export type CvContent = {
  profile: {
    role: string;
    location: string;
    summary: string;
    languages: string[];
    hiring: Record<string, HiringText>;
  };
  jobs: Record<string, JobText>;
  projects: Record<string, ProjectText>;
  skillGroups: Record<string, string>;
  education: {
    degree: string;
    school: string;
    note: string;
  };
  certifications: Record<string, string>;
};

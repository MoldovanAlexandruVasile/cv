import type { NavLink } from "../types/navigation.ts";

export const NAV_LINKS: NavLink[] = [
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
];

export const SECTION_IDS = NAV_LINKS.map((link) => link.id);

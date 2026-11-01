// All CV content lives in this folder, so updating the page never means touching components.
import type { Profile } from "../types/cv.ts";

export const profile: Profile = {
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

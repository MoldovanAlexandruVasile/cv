import { certifications } from "../../data/certifications.ts";
import { education } from "../../data/education.ts";
import { profile } from "../../data/profile.ts";
import { CARD_GRID } from "../../styles/ui.ts";
import { Section } from "../common/Section.tsx";
import { CertificationCard } from "./CertificationCard.tsx";
import { DegreeCard } from "./DegreeCard.tsx";
import { LanguagesCard } from "./LanguagesCard.tsx";

export const Education = () => (
  <Section id="education" title="Education & certifications">
    <div className={CARD_GRID}>
      <DegreeCard education={education} />
      {certifications.map((certification) => (
        <CertificationCard key={certification.name} certification={certification} />
      ))}
      <LanguagesCard languages={profile.languages} />
    </div>
  </Section>
);

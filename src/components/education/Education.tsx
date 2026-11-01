import { education } from "../../data/education.ts";
import { profile } from "../../data/profile.ts";
import { CardGrid } from "../common/CardGrid.tsx";
import { Section } from "../common/Section.tsx";
import { CertificationList } from "./CertificationList.tsx";
import { DegreeCard } from "./DegreeCard.tsx";
import { LanguagesCard } from "./LanguagesCard.tsx";

export const Education = () => (
  <Section id="education" title="Education & certifications">
    <CardGrid>
      <DegreeCard education={education} />
      <CertificationList />
      <LanguagesCard languages={profile.languages} />
    </CardGrid>
  </Section>
);

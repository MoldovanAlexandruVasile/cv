import { useTranslation } from "react-i18next";
import { education } from "../../data/education.ts";
import { CardGrid } from "../common/CardGrid.tsx";
import { Section } from "../common/Section.tsx";
import { CertificationList } from "./CertificationList.tsx";
import { DegreeCard } from "./DegreeCard.tsx";
import { LanguagesCard } from "./LanguagesCard.tsx";

export const Education = () => {
  const { t } = useTranslation();

  return (
    <Section id="education" title={t("education.title")}>
      <CardGrid>
        <DegreeCard period={education.period} />
        <CertificationList />
        <LanguagesCard />
      </CardGrid>
    </Section>
  );
};

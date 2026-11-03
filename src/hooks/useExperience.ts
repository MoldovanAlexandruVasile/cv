import { useTranslation } from "react-i18next";
import { CAREER_START } from "../constants/career.ts";
import { fullYearsSince } from "../utils/dates.ts";

// Years of experience as of today (the visitor's clock), plus the phrase used
// inside sentences: "7+ years" in English, "7 ani" / "20 de ani" in Romanian.
export const useExperience = () => {
  const { t } = useTranslation();
  const years = fullYearsSince(CAREER_START);

  return { years, yearsText: t("experience.years", { count: years }) };
};

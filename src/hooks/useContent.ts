import { useTranslation } from "react-i18next";
import type { CvContent } from "../types/content.ts";

// The CV text in the current language.
export const useContent = (): CvContent => {
  const { t } = useTranslation();
  return t("content", { returnObjects: true }) as CvContent;
};

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "./useLanguage.ts";

// Keeps <html lang>, the tab title and the meta description in the current language.
export const useDocumentLanguage = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t("meta.title");
    document.querySelector('meta[name="description"]')?.setAttribute("content", t("meta.description"));
  }, [language, t]);
};

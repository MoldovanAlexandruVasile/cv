import { useTranslation } from "react-i18next";
import { DEFAULT_LANGUAGE, LANGUAGE_CODES, type LanguageCode } from "../constants/languages.ts";

const isSupported = (code: string | undefined): code is LanguageCode =>
  LANGUAGE_CODES.includes(code as LanguageCode);

export const useLanguage = () => {
  const { i18n } = useTranslation();
  const language = isSupported(i18n.resolvedLanguage) ? i18n.resolvedLanguage : DEFAULT_LANGUAGE;

  const setLanguage = (code: LanguageCode) => void i18n.changeLanguage(code);

  return { language, setLanguage };
};

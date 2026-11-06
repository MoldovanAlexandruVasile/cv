import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import {
  DEFAULT_LANGUAGE,
  LANGUAGE_CODES,
  LANGUAGE_QUERY_PARAM,
  LANGUAGE_STORAGE_KEY,
} from "../constants/languages.ts";
import { en } from "./locales/en/index.ts";
import { ro } from "./locales/ro/index.ts";

// A ?lang= link wins, then a saved choice, then the browser's language (ro-RO → ro),
// else English.
void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ro: { translation: ro },
    },
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: LANGUAGE_CODES,
    nonExplicitSupportedLngs: true,
    load: "languageOnly",
    interpolation: { escapeValue: false },
    detection: {
      order: ["querystring", "localStorage", "navigator"],
      lookupQuerystring: LANGUAGE_QUERY_PARAM,
      caches: ["localStorage"],
      lookupLocalStorage: LANGUAGE_STORAGE_KEY,
    },
  });

export default i18n;

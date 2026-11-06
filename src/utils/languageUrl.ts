import { DEFAULT_LANGUAGE, LANGUAGE_QUERY_PARAM, type LanguageCode } from "../constants/languages.ts";

// `base` with the language set in its URL: English is the plain address, other
// languages add ?lang=xx. Keeps any other part of the URL, such as a #section.
export const urlForLanguage = (base: string, language: LanguageCode) => {
  const url = new URL(base);
  if (language === DEFAULT_LANGUAGE) url.searchParams.delete(LANGUAGE_QUERY_PARAM);
  else url.searchParams.set(LANGUAGE_QUERY_PARAM, language);
  return url.toString();
};

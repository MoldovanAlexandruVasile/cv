export const LANGUAGES = [
  { code: "en", label: "English", short: "EN" },
  { code: "ro", label: "Română", short: "RO" },
] as const;

export type LanguageCode = (typeof LANGUAGES)[number]["code"];

export const LANGUAGE_CODES: LanguageCode[] = LANGUAGES.map((language) => language.code);

export const DEFAULT_LANGUAGE: LanguageCode = "en";

// localStorage key the detector reads and writes.
export const LANGUAGE_STORAGE_KEY = "language";

// URL parameter that selects a language (?lang=ro). English, the default, has none.
export const LANGUAGE_QUERY_PARAM = "lang";

// Open Graph locale names, for link previews.
export const OG_LOCALES: Record<LanguageCode, string> = {
  en: "en_GB",
  ro: "ro_RO",
};

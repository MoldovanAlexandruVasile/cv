import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { DEFAULT_LANGUAGE, LANGUAGE_CODES, OG_LOCALES } from "../constants/languages.ts";
import { setLinkHref, setMetaContent } from "../utils/documentHead.ts";
import { urlForLanguage } from "../utils/languageUrl.ts";
import { useExperience } from "./useExperience.ts";
import { useLanguage } from "./useLanguage.ts";

// Keeps the page's language visible to browsers, crawlers and link previews:
// <html lang>, the title and descriptions, the canonical URL (?lang=ro for
// Romanian) and the address bar, so a shared link opens in the same language.
export const useDocumentLanguage = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const { yearsText } = useExperience();

  useEffect(() => {
    const title = t("meta.title");
    const description = t("meta.description", { years: yearsText });
    const pageUrl = urlForLanguage(__SITE_URL__, language);

    document.documentElement.lang = language;
    document.title = title;
    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent('meta[name="twitter:title"]', title);
    setMetaContent('meta[name="twitter:description"]', description);
    setMetaContent('meta[property="og:url"]', pageUrl);
    setMetaContent('meta[property="og:locale"]', OG_LOCALES[language]);
    setMetaContent(
      'meta[property="og:locale:alternate"]',
      OG_LOCALES[LANGUAGE_CODES.find((code) => code !== language) ?? DEFAULT_LANGUAGE],
    );
    setLinkHref('link[rel="canonical"]', pageUrl);
    window.history.replaceState(window.history.state, "", urlForLanguage(window.location.href, language));
  }, [language, t, yearsText]);
};

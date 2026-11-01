import "i18next";
import type { en } from "./locales/en/index.ts";

// Type-checks every t("…") key against the English resources.
declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      translation: typeof en;
    };
  }
}

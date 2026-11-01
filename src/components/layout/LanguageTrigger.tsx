import { useTranslation } from "react-i18next";
import type { LanguageCode } from "../../constants/languages.ts";
import { Chevron } from "../common/Chevron.tsx";

type LanguageTriggerProps = {
  current: LanguageCode;
  open: boolean;
  onToggle: () => void;
};

export const LanguageTrigger = ({ current, open, onToggle }: LanguageTriggerProps) => {
  const { t } = useTranslation();

  return (
    <button
      className="inline-flex h-9 items-center gap-1.5 rounded-full border border-line bg-surface pr-2.5 pl-3 text-sm font-medium"
      aria-haspopup="menu"
      aria-expanded={open}
      aria-label={t("language.label")}
      onClick={onToggle}
    >
      <span aria-hidden>🌐</span>
      {current.toUpperCase()}
      <Chevron open={open} direction="down" className="text-base" />
    </button>
  );
};

import { useRef } from "react";
import type { LanguageCode } from "../../constants/languages.ts";
import { useDismiss } from "../../hooks/useDismiss.ts";
import { useLanguage } from "../../hooks/useLanguage.ts";
import { useToggle } from "../../hooks/useToggle.ts";
import { LanguageMenu } from "./LanguageMenu.tsx";
import { LanguageTrigger } from "./LanguageTrigger.tsx";

export const LanguageDropdown = () => {
  const { language, setLanguage } = useLanguage();
  const { on: open, toggle, close } = useToggle();
  const ref = useRef<HTMLDivElement>(null);
  useDismiss(ref, open, close);

  const pick = (code: LanguageCode) => {
    setLanguage(code);
    close();
  };

  return (
    <div className="relative" ref={ref}>
      <LanguageTrigger current={language} open={open} onToggle={toggle} />
      {open && <LanguageMenu current={language} onPick={pick} />}
    </div>
  );
};

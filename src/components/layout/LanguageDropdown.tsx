import { useDropdown } from "@moldovanalexandruvasile/unity-marketing";
import type { LanguageCode } from "../../constants/languages.ts";
import { useLanguage } from "../../hooks/useLanguage.ts";
import { LanguageMenu } from "./LanguageMenu.tsx";
import { LanguageTrigger } from "./LanguageTrigger.tsx";

export const LanguageDropdown = () => {
  const { language, setLanguage } = useLanguage();
  const { root: ref, isOpen: open, toggle, close } = useDropdown();

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

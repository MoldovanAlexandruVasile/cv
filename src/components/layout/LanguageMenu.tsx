import { LANGUAGES, type LanguageCode } from "../../constants/languages.ts";
import { LanguageOption } from "./LanguageOption.tsx";

type LanguageMenuProps = {
  current: LanguageCode;
  onPick: (code: LanguageCode) => void;
};

export const LanguageMenu = ({ current, onPick }: LanguageMenuProps) => (
  <div
    className="absolute top-[calc(100%+8px)] right-0 z-20 grid min-w-44 rounded-xl border border-line bg-surface p-1.5 shadow-card"
    role="menu"
  >
    {LANGUAGES.map((language) => (
      <LanguageOption
        key={language.code}
        code={language.code}
        label={language.label}
        selected={language.code === current}
        onPick={onPick}
      />
    ))}
  </div>
);

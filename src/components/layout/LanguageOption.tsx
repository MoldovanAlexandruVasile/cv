import type { LanguageCode } from "../../constants/languages.ts";
import { classNames } from "../../utils/classNames.ts";

type LanguageOptionProps = {
  code: LanguageCode;
  label: string;
  selected: boolean;
  onPick: (code: LanguageCode) => void;
};

export const LanguageOption = ({ code, label, selected, onPick }: LanguageOptionProps) => (
  <button
    role="menuitemradio"
    aria-checked={selected}
    lang={code}
    className={classNames(
      "flex items-center justify-between gap-6 rounded-lg px-3 py-2 text-left text-sm transition-colors",
      selected ? "bg-accent-soft font-semibold text-accent" : "text-ink hover:bg-accent-soft hover:text-accent",
    )}
    onClick={() => onPick(code)}
  >
    {label}
    <span className="font-mono text-xs text-muted">{code.toUpperCase()}</span>
  </button>
);

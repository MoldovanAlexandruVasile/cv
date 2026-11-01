import type { MouseEvent } from "react";
import { classNames } from "../../utils/classNames.ts";

type TagProps = {
  label: string;
  active: boolean;
  onSelect: (label: string) => void;
};

const BASE = "rounded-full border px-2.5 py-1 text-[13px] font-medium transition-colors duration-150";

export const Tag = ({ label, active, onSelect }: TagProps) => {
  const handleClick = (event: MouseEvent) => {
    event.stopPropagation();
    onSelect(label);
  };

  return (
    <button
      className={classNames(
        BASE,
        active ? "border-accent bg-accent text-white" : "border-line bg-page hover:border-accent",
      )}
      aria-pressed={active}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

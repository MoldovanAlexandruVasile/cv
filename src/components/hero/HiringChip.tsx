import type { HiringText } from "../../types/content.ts";

type HiringChipProps = {
  option: HiringText;
};

export const HiringChip = ({ option }: HiringChipProps) => (
  <span className="rounded-full bg-accent-soft px-3 py-1.5 text-sm">
    <strong>{option.label}</strong> · {option.detail}
  </span>
);

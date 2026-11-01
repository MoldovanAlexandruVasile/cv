import type { HiringOption } from "../../types/cv.ts";

type HiringChipProps = {
  option: HiringOption;
};

export const HiringChip = ({ option }: HiringChipProps) => (
  <span className="rounded-full bg-accent-soft px-3 py-1.5 text-sm">
    <strong>{option.label}</strong> · {option.detail}
  </span>
);

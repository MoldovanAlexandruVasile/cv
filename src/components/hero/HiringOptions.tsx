import type { HiringOption } from "../../types/cv.ts";
import { HiringChip } from "./HiringChip.tsx";

type HiringOptionsProps = {
  options: HiringOption[];
};

export const HiringOptions = ({ options }: HiringOptionsProps) => (
  <div className="mt-6 flex flex-wrap items-center gap-2">
    <span className="mr-1 inline-flex items-center gap-2 text-sm font-semibold">
      <span className="size-2 rounded-full bg-personal ring-4 ring-personal/25" aria-hidden />
      Available as
    </span>
    {options.map((option) => (
      <HiringChip key={option.label} option={option} />
    ))}
  </div>
);

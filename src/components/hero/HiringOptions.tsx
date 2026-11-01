import type { HiringOption } from "../../types/cv.ts";
import { AvailabilityLabel } from "./AvailabilityLabel.tsx";
import { HiringChip } from "./HiringChip.tsx";

type HiringOptionsProps = {
  options: HiringOption[];
};

export const HiringOptions = ({ options }: HiringOptionsProps) => (
  <div className="mt-6 flex flex-wrap items-center gap-2">
    <AvailabilityLabel />
    {options.map((option) => (
      <HiringChip key={option.label} option={option} />
    ))}
  </div>
);

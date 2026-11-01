import { useContent } from "../../hooks/useContent.ts";
import { AvailabilityLabel } from "./AvailabilityLabel.tsx";
import { HiringChip } from "./HiringChip.tsx";

type HiringOptionsProps = {
  ids: string[];
};

export const HiringOptions = ({ ids }: HiringOptionsProps) => {
  const { profile } = useContent();

  return (
    <div className="mt-6 flex flex-wrap items-center gap-2">
      <AvailabilityLabel />
      {ids.map((id) => (
        <HiringChip key={id} option={profile.hiring[id]} />
      ))}
    </div>
  );
};

import { StatusDot } from "../common/StatusDot.tsx";

export const AvailabilityLabel = () => (
  <span className="mr-1 inline-flex items-center gap-2 text-sm font-semibold">
    <StatusDot />
    Available as
  </span>
);

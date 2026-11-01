import { STATS } from "../../constants/stats.ts";
import { StatItem } from "./StatItem.tsx";

export const HeroStats = () => (
  <dl className="mt-14 flex flex-wrap gap-12 max-md:gap-7">
    {STATS.map((stat) => (
      <StatItem key={stat.label} value={stat.value} label={stat.label} />
    ))}
  </dl>
);

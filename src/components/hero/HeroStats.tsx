import { STATS } from "../../constants/stats.ts";

export const HeroStats = () => (
  <dl className="mt-14 flex flex-wrap gap-12 max-md:gap-7">
    {STATS.map((stat) => (
      <div key={stat.label}>
        <dt className="text-4xl font-bold">{stat.value}</dt>
        <dd className="text-sm text-muted">{stat.label}</dd>
      </div>
    ))}
  </dl>
);

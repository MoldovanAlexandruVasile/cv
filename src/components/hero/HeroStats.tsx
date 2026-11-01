import { useTranslation } from "react-i18next";
import { STATS } from "../../constants/stats.ts";
import { StatItem } from "./StatItem.tsx";

export const HeroStats = () => {
  const { t } = useTranslation();

  return (
    <dl className="mt-14 flex flex-wrap gap-12 max-md:mt-10 max-md:grid max-md:grid-cols-3 max-md:gap-4">
      {STATS.map((stat) => (
        <StatItem key={stat.id} value={stat.value} label={t(`hero.stats.${stat.id}`)} />
      ))}
    </dl>
  );
};

import { useTranslation } from "react-i18next";
import { STATS } from "../../constants/stats.ts";
import { StatItem } from "./StatItem.tsx";

export const HeroStats = () => {
  const { t } = useTranslation();

  return (
    <dl className="mt-14 flex flex-wrap gap-12 max-md:gap-7">
      {STATS.map((stat) => (
        <StatItem key={stat.id} value={stat.value} label={t(`hero.stats.${stat.id}`)} />
      ))}
    </dl>
  );
};

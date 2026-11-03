import { useTranslation } from "react-i18next";
import { buildStats } from "../../constants/stats.ts";
import { useExperience } from "../../hooks/useExperience.ts";
import { StatItem } from "./StatItem.tsx";

export const HeroStats = () => {
  const { t } = useTranslation();
  const { years } = useExperience();

  return (
    <dl className="mt-14 flex flex-wrap gap-12 max-md:mt-10 max-md:grid max-md:grid-cols-3 max-md:gap-4">
      {buildStats(years).map((stat) => (
        <StatItem key={stat.id} value={stat.value} label={t(`hero.stats.${stat.id}`)} />
      ))}
    </dl>
  );
};

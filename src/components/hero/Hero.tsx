import { profile } from "../../data/profile.ts";
import { useTranslation } from "react-i18next";
import { useContent } from "../../hooks/useContent.ts";
import { useExperience } from "../../hooks/useExperience.ts";
import { HeroActions } from "./HeroActions.tsx";
import { HeroLocation } from "./HeroLocation.tsx";
import { HeroName } from "./HeroName.tsx";
import { HeroRole } from "./HeroRole.tsx";
import { HeroStats } from "./HeroStats.tsx";
import { HeroSummary } from "./HeroSummary.tsx";
import { HiringOptions } from "./HiringOptions.tsx";

export const Hero = () => {
  const { t } = useTranslation();
  const { profile: text } = useContent();
  const { yearsText } = useExperience();

  return (
    <section className="pt-24 pb-16 max-md:pt-10 max-md:pb-10" id="top">
      <HeroLocation location={text.location} />
      <HeroName name={profile.name} />
      <HeroRole role={text.role} />
      <HeroSummary summary={t("content.profile.summary", { years: yearsText })} />
      <HiringOptions ids={profile.hiring} />
      <HeroActions />
      <HeroStats />
    </section>
  );
};

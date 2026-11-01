import { profile } from "../../data/profile.ts";
import { useContent } from "../../hooks/useContent.ts";
import { HeroActions } from "./HeroActions.tsx";
import { HeroLocation } from "./HeroLocation.tsx";
import { HeroName } from "./HeroName.tsx";
import { HeroRole } from "./HeroRole.tsx";
import { HeroStats } from "./HeroStats.tsx";
import { HeroSummary } from "./HeroSummary.tsx";
import { HiringOptions } from "./HiringOptions.tsx";

export const Hero = () => {
  const { profile: text } = useContent();

  return (
    <section className="pt-24 pb-16 max-md:pt-14 max-md:pb-10" id="top">
      <HeroLocation location={text.location} />
      <HeroName name={profile.name} />
      <HeroRole role={text.role} />
      <HeroSummary summary={text.summary} />
      <HiringOptions ids={profile.hiring} />
      <HeroActions />
      <HeroStats />
    </section>
  );
};

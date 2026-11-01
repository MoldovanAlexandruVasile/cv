import { profile } from "../../data/profile.ts";
import { HeroActions } from "./HeroActions.tsx";
import { HeroLocation } from "./HeroLocation.tsx";
import { HeroName } from "./HeroName.tsx";
import { HeroRole } from "./HeroRole.tsx";
import { HeroStats } from "./HeroStats.tsx";
import { HeroSummary } from "./HeroSummary.tsx";
import { HiringOptions } from "./HiringOptions.tsx";

export const Hero = () => (
  <section className="pt-24 pb-16 max-md:pt-14 max-md:pb-10" id="top">
    <HeroLocation location={profile.location} />
    <HeroName name={profile.name} />
    <HeroRole role={profile.role} />
    <HeroSummary summary={profile.summary} />
    <HiringOptions options={profile.hiring} />
    <HeroActions />
    <HeroStats />
  </section>
);

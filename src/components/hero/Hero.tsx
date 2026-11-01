import { profile } from "../../data/profile.ts";
import { HeroActions } from "./HeroActions.tsx";
import { HeroName } from "./HeroName.tsx";
import { HeroStats } from "./HeroStats.tsx";
import { HiringOptions } from "./HiringOptions.tsx";

export const Hero = () => (
  <section className="pt-24 pb-16 max-md:pt-14 max-md:pb-10" id="top">
    <p className="mb-4 font-mono text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
      {profile.location}
    </p>
    <HeroName name={profile.name} />
    <p className="mt-5 mb-2 text-xl font-semibold">{profile.role}</p>
    <p className="max-w-[640px] text-lg text-muted">{profile.summary}</p>
    <HiringOptions options={profile.hiring} />
    <HeroActions />
    <HeroStats />
  </section>
);

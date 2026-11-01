import { useState } from "react";
import { jobs } from "../../data/jobs.ts";
import type { SkillFilterProps } from "../../types/skillFilter.ts";
import { Section } from "../common/Section.tsx";
import { JobItem } from "./JobItem.tsx";

// The vertical line the timeline dots sit on.
const TIMELINE =
  "relative mt-6 grid gap-3 pl-7 before:absolute before:top-3 before:bottom-3 before:left-[7px] before:w-0.5 before:bg-line";

export const Experience = ({ selected, onSelect }: SkillFilterProps) => {
  const [openId, setOpenId] = useState<string | null>(jobs[0].id);

  const toggleJob = (id: string) => setOpenId((current) => (current === id ? null : id));

  return (
    <Section id="experience" title="Experience">
      <ol className={TIMELINE}>
        {jobs.map((job) => (
          <JobItem
            key={job.id}
            job={job}
            open={openId === job.id}
            onToggle={() => toggleJob(job.id)}
            selected={selected}
            onSelect={onSelect}
          />
        ))}
      </ol>
    </Section>
  );
};

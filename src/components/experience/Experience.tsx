import { jobs } from "../../data/jobs.ts";
import { useAccordion } from "../../hooks/useAccordion.ts";
import type { SkillFilterProps } from "../../types/skillFilter.ts";
import { Section } from "../common/Section.tsx";
import { JobItem } from "./JobItem.tsx";
import { Timeline } from "./Timeline.tsx";

export const Experience = ({ selected, onSelect }: SkillFilterProps) => {
  const { isOpen, toggle } = useAccordion(jobs[0].id);

  return (
    <Section id="experience" title="Experience">
      <Timeline>
        {jobs.map((job) => (
          <JobItem
            key={job.id}
            job={job}
            open={isOpen(job.id)}
            onToggle={() => toggle(job.id)}
            selected={selected}
            onSelect={onSelect}
          />
        ))}
      </Timeline>
    </Section>
  );
};

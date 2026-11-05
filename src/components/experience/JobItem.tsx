import { useContent } from "../../hooks/useContent.ts";
import { SURFACE } from "../../styles/ui.ts";
import type { Job } from "../../types/cv.ts";
import type { SkillFilterProps } from "../../types/skillFilter.ts";
import { cx } from "@moldovanalexandruvasile/unity-marketing";
import { skillMatchClass } from "../../utils/skillMatch.ts";
import { JobDetails } from "./JobDetails.tsx";
import { JobHeader } from "./JobHeader.tsx";
import { TimelineDot } from "./TimelineDot.tsx";

type JobItemProps = SkillFilterProps & {
  job: Job;
  open: boolean;
  onToggle: () => void;
};

export const JobItem = ({ job, open, onToggle, selected, onSelect }: JobItemProps) => {
  const { jobs } = useContent();
  const text = jobs[job.id];

  return (
    <li className={cx(SURFACE, "relative", skillMatchClass(job.tags, selected))}>
      <TimelineDot filled={open} />
      <JobHeader job={job} text={text} open={open} onToggle={onToggle} />
      <JobDetails points={text.points} tags={job.tags} open={open} selected={selected} onSelect={onSelect} />
    </li>
  );
};

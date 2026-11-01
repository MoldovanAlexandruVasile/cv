import { SURFACE } from "../../styles/ui.ts";
import type { Job } from "../../types/cv.ts";
import type { SkillFilterProps } from "../../types/skillFilter.ts";
import { classNames } from "../../utils/classNames.ts";
import { skillMatchClass } from "../../utils/skillMatch.ts";
import { JobDetails } from "./JobDetails.tsx";
import { JobHeader } from "./JobHeader.tsx";
import { TimelineDot } from "./TimelineDot.tsx";

type JobItemProps = SkillFilterProps & {
  job: Job;
  open: boolean;
  onToggle: () => void;
};

export const JobItem = ({ job, open, onToggle, selected, onSelect }: JobItemProps) => (
  <li className={classNames(SURFACE, "relative", skillMatchClass(job.tags, selected))}>
    <TimelineDot filled={open} />
    <JobHeader job={job} open={open} onToggle={onToggle} />
    <JobDetails job={job} open={open} selected={selected} onSelect={onSelect} />
  </li>
);

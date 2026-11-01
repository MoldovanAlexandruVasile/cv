import type { Job } from "../../types/cv.ts";
import { Chevron } from "../common/Chevron.tsx";
import { JobDates } from "./JobDates.tsx";
import { JobHeadline } from "./JobHeadline.tsx";
import { JobTitle } from "./JobTitle.tsx";

type JobHeaderProps = {
  job: Job;
  open: boolean;
  onToggle: () => void;
};

export const JobHeader = ({ job, open, onToggle }: JobHeaderProps) => (
  <button
    className="grid w-full grid-cols-[1fr_auto] gap-x-4 gap-y-0.5 px-5 py-[18px] text-left"
    aria-expanded={open}
    onClick={onToggle}
  >
    <JobDates start={job.start} end={job.end} />
    <JobTitle title={job.title} company={job.company} />
    <JobHeadline headline={job.headline} />
    <Chevron open={open} />
  </button>
);

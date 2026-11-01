import type { Job } from "../../types/cv.ts";
import type { JobText } from "../../types/content.ts";
import { Chevron } from "../common/Chevron.tsx";
import { JobDates } from "./JobDates.tsx";
import { JobHeadline } from "./JobHeadline.tsx";
import { JobTitle } from "./JobTitle.tsx";

type JobHeaderProps = {
  job: Job;
  text: JobText;
  open: boolean;
  onToggle: () => void;
};

export const JobHeader = ({ job, text, open, onToggle }: JobHeaderProps) => (
  <button
    className="grid w-full grid-cols-[1fr_auto] gap-x-4 gap-y-0.5 px-5 py-[18px] text-left max-md:gap-x-2 max-md:px-4 max-md:py-4"
    aria-expanded={open}
    onClick={onToggle}
  >
    <JobDates start={job.start} end={job.end} />
    <JobTitle title={text.title} company={job.company} />
    <JobHeadline headline={text.headline} />
    <Chevron open={open} className="col-start-2 row-span-3 row-start-1 self-center text-2xl" />
  </button>
);

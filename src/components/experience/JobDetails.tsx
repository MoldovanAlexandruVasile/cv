import type { Job } from "../../types/cv.ts";
import type { SkillFilterProps } from "../../types/skillFilter.ts";
import { classNames } from "../../utils/classNames.ts";
import { Tags } from "../common/Tags.tsx";
import { JobPoints } from "./JobPoints.tsx";

type JobDetailsProps = SkillFilterProps & {
  job: Job;
  open: boolean;
};

// Animating grid rows from 0fr to 1fr slides the details open at their natural height.
export const JobDetails = ({ job, open, selected, onSelect }: JobDetailsProps) => (
  <div
    className={classNames(
      "grid transition-[grid-template-rows] duration-250 ease-in-out",
      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
    )}
  >
    <div className={classNames("overflow-hidden px-5", open && "pb-5")}>
      <JobPoints points={job.points} />
      <Tags tags={job.tags} selected={selected} onSelect={onSelect} />
    </div>
  </div>
);

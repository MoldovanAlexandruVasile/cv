import type { SkillFilterProps } from "../../types/skillFilter.ts";
import { cx } from "@moldovanalexandruvasile/unity-marketing";
import { Tags } from "../common/Tags.tsx";
import { JobPoints } from "./JobPoints.tsx";

type JobDetailsProps = SkillFilterProps & {
  points: string[];
  tags: string[];
  open: boolean;
};

// Animating grid rows from 0fr to 1fr slides the details open at their natural height.
export const JobDetails = ({ points, tags, open, selected, onSelect }: JobDetailsProps) => (
  <div
    className={cx(
      "grid transition-[grid-template-rows] duration-250 ease-in-out",
      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
    )}
  >
    <div className={cx("overflow-hidden px-5 max-md:px-4", open && "pb-5 max-md:pb-4")}>
      <JobPoints points={points} />
      <Tags tags={tags} selected={selected} onSelect={onSelect} />
    </div>
  </div>
);

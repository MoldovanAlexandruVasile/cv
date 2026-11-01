import type { Job } from "../../types/cv.ts";
import { classNames } from "../../utils/classNames.ts";

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
    <span className="font-mono text-xs font-medium text-accent">
      {job.start} – {job.end}
    </span>
    <span className="col-start-1 text-lg font-semibold">
      {job.title} <span className="font-normal text-muted">@ {job.company}</span>
    </span>
    <span className="col-start-1 text-sm text-muted">{job.headline}</span>
    <span
      className={classNames(
        "col-start-2 row-span-3 row-start-1 self-center text-2xl text-muted transition-transform duration-200",
        open && "rotate-90",
      )}
      aria-hidden
    >
      ›
    </span>
  </button>
);

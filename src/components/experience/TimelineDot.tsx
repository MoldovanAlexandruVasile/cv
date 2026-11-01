import { classNames } from "../../utils/classNames.ts";

type TimelineDotProps = {
  filled: boolean;
};

export const TimelineDot = ({ filled }: TimelineDotProps) => (
  <span
    className={classNames(
      "absolute top-6 -left-[27px] size-3 rounded-full border-2 border-accent",
      filled ? "bg-accent" : "bg-page",
    )}
    aria-hidden
  />
);

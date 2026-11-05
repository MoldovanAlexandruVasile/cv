import { cx } from "@moldovanalexandruvasile/unity-marketing";

type TimelineDotProps = {
  filled: boolean;
};

export const TimelineDot = ({ filled }: TimelineDotProps) => (
  <span
    className={cx(
      "absolute top-6 -left-[27px] size-3 max-md:-left-[19px] rounded-full border-2 border-accent",
      filled ? "bg-accent" : "bg-page",
    )}
    aria-hidden
  />
);

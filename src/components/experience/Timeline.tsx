import type { ReactNode } from "react";

type TimelineProps = {
  children: ReactNode;
};

// The ::before element draws the vertical line the dots sit on.
export const Timeline = ({ children }: TimelineProps) => (
  <ol className="relative mt-6 grid gap-3 pl-7 before:absolute before:top-3 before:bottom-3 before:left-[7px] before:w-0.5 before:bg-line">
    {children}
  </ol>
);

import type { ReactNode } from "react";
import { SURFACE } from "../../styles/ui.ts";
import { classNames } from "../../utils/classNames.ts";

type CardProps = {
  // Border colour (and dimming) from skillMatchClass, or plain "border-line".
  stateClass?: string;
  className?: string;
  children: ReactNode;
};

export const Card = ({ stateClass = "border-line", className, children }: CardProps) => (
  <article className={classNames(SURFACE, "flex flex-col p-6 hover:-translate-y-0.5", stateClass, className)}>
    {children}
  </article>
);

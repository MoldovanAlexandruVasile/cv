import type { ReactNode } from "react";
import { SURFACE } from "../../styles/ui.ts";
import { cx } from "@moldovanalexandruvasile/unity-marketing";

type CardProps = {
  // Border colour (and dimming) from skillMatchClass, or plain "border-line".
  stateClass?: string;
  className?: string;
  children: ReactNode;
};

export const Card = ({ stateClass = "border-line", className, children }: CardProps) => (
  <article className={cx(SURFACE, "flex flex-col p-6 hover:-translate-y-0.5 max-md:p-5", stateClass, className)}>
    {children}
  </article>
);

import type { ReactNode } from "react";
import { buttonClass } from "../../styles/ui.ts";
import { cx } from "@moldovanalexandruvasile/unity-marketing";

type ExternalButtonProps = {
  href: string;
  primary?: boolean;
  className?: string;
  children: ReactNode;
};

export const ExternalButton = ({ href, primary = false, className, children }: ExternalButtonProps) => (
  <a className={cx(buttonClass(primary), className)} href={href} target="_blank" rel="noreferrer">
    {children}
  </a>
);

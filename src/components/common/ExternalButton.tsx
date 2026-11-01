import type { ReactNode } from "react";
import { buttonClass } from "../../styles/ui.ts";
import { classNames } from "../../utils/classNames.ts";

type ExternalButtonProps = {
  href: string;
  primary?: boolean;
  className?: string;
  children: ReactNode;
};

export const ExternalButton = ({ href, primary = false, className, children }: ExternalButtonProps) => (
  <a className={classNames(buttonClass(primary), className)} href={href} target="_blank" rel="noreferrer">
    {children}
  </a>
);

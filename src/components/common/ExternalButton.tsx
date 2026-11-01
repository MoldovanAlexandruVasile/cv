import type { ReactNode } from "react";
import { buttonClass } from "../../styles/ui.ts";

type ExternalButtonProps = {
  href: string;
  primary?: boolean;
  children: ReactNode;
};

export const ExternalButton = ({ href, primary = false, children }: ExternalButtonProps) => (
  <a className={buttonClass(primary)} href={href} target="_blank" rel="noreferrer">
    {children}
  </a>
);

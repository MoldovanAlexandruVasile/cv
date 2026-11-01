import type { ReactNode } from "react";
import { EYEBROW } from "../../styles/ui.ts";
import { classNames } from "../../utils/classNames.ts";

type KindLabelProps = {
  variant?: string;
  children: ReactNode;
};

const COLORS: Record<string, string> = {
  personal: "text-personal",
  academic: "text-academic",
};

export const KindLabel = ({ variant, children }: KindLabelProps) => (
  <span className={classNames(EYEBROW, (variant && COLORS[variant]) || "text-accent")}>{children}</span>
);

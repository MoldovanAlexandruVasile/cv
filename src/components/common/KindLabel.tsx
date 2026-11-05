import type { ReactNode } from "react";
import { EYEBROW } from "../../styles/ui.ts";
import { cx } from "@moldovanalexandruvasile/unity-marketing";

type KindLabelProps = {
  variant?: string;
  children: ReactNode;
};

const COLORS: Record<string, string> = {
  personal: "text-personal",
  academic: "text-academic",
};

export const KindLabel = ({ variant, children }: KindLabelProps) => (
  <span className={cx(EYEBROW, (variant && COLORS[variant]) || "text-accent")}>{children}</span>
);

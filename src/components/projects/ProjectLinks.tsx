import { ACTIONS } from "../../styles/ui.ts";
import type { ProjectLink } from "../../types/cv.ts";
import { cx } from "@moldovanalexandruvasile/unity-marketing";
import { ExternalButton } from "../common/ExternalButton.tsx";

type ProjectLinksProps = {
  links?: ProjectLink[];
  labels: Record<string, string>;
  className?: string;
};

// The first link is the main call to action.
export const ProjectLinks = ({ links, labels, className }: ProjectLinksProps) => {
  if (!links) return null;

  return (
    <div className={cx(ACTIONS, className)}>
      {links.map((link, i) => (
        <ExternalButton key={link.href} href={link.href} primary={i === 0}>
          {labels[link.id]} ↗
        </ExternalButton>
      ))}
    </div>
  );
};

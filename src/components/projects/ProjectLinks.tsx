import { ACTIONS } from "../../styles/ui.ts";
import type { ProjectLink } from "../../types/cv.ts";
import { classNames } from "../../utils/classNames.ts";
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
    <div className={classNames(ACTIONS, className)}>
      {links.map((link, i) => (
        <ExternalButton key={link.href} href={link.href} primary={i === 0}>
          {labels[link.id]} ↗
        </ExternalButton>
      ))}
    </div>
  );
};

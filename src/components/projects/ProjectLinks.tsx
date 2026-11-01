import { ACTIONS } from "../../styles/ui.ts";
import type { ProjectLink } from "../../types/cv.ts";
import { classNames } from "../../utils/classNames.ts";
import { ExternalButton } from "../common/ExternalButton.tsx";

type ProjectLinksProps = {
  links?: ProjectLink[];
  className?: string;
};

// The first link is the main call to action.
export const ProjectLinks = ({ links, className }: ProjectLinksProps) => {
  if (!links) return null;

  return (
    <div className={classNames(ACTIONS, className)}>
      {links.map((link, i) => (
        <ExternalButton key={link.href} href={link.href} primary={i === 0}>
          {link.label} ↗
        </ExternalButton>
      ))}
    </div>
  );
};

import { CARD_TEXT, SURFACE } from "../../styles/ui.ts";
import type { Project } from "../../types/cv.ts";
import type { SkillFilterProps } from "../../types/skillFilter.ts";
import { classNames } from "../../utils/classNames.ts";
import { skillMatchClass } from "../../utils/skillMatch.ts";
import { KindLabel } from "../common/KindLabel.tsx";
import { Tags } from "../common/Tags.tsx";
import { Gallery } from "../gallery/Gallery.tsx";
import { ProjectLinks } from "./ProjectLinks.tsx";

type FeaturedProjectProps = SkillFilterProps & {
  project: Project;
};

export const FeaturedProject = ({ project, selected, onSelect }: FeaturedProjectProps) => (
  <article
    className={classNames(
      SURFACE,
      "mb-4 grid grid-cols-[1.25fr_1fr] overflow-hidden max-md:grid-cols-1",
      skillMatchClass(project.tags, selected),
    )}
  >
    <Gallery images={project.images ?? []} />
    <div className="p-7">
      <KindLabel variant={project.kind}>{project.kind} project</KindLabel>
      <h3 className="mt-1.5 text-[30px] font-bold">{project.name}</h3>
      <p className="mt-1.5 mb-3 font-medium">{project.tagline}</p>
      <p className={CARD_TEXT}>{project.description}</p>
      <Tags tags={project.tags} selected={selected} onSelect={onSelect} />
      <ProjectLinks links={project.links} className="mt-7" />
    </div>
  </article>
);

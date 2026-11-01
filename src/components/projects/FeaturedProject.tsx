import { useContent } from "../../hooks/useContent.ts";
import { SURFACE } from "../../styles/ui.ts";
import type { Project } from "../../types/cv.ts";
import type { SkillFilterProps } from "../../types/skillFilter.ts";
import { classNames } from "../../utils/classNames.ts";
import { withAltText } from "../../utils/projects.ts";
import { skillMatchClass } from "../../utils/skillMatch.ts";
import { Tags } from "../common/Tags.tsx";
import { Gallery } from "../gallery/Gallery.tsx";
import { ProjectLinks } from "./ProjectLinks.tsx";
import { ProjectSummary } from "./ProjectSummary.tsx";

type FeaturedProjectProps = SkillFilterProps & {
  project: Project;
};

export const FeaturedProject = ({ project, selected, onSelect }: FeaturedProjectProps) => {
  const text = useContent().projects[project.id];

  return (
    <article
      className={classNames(
        SURFACE,
        "mb-4 grid grid-cols-[1.25fr_1fr] overflow-hidden max-md:grid-cols-1",
        skillMatchClass(project.tags, selected),
      )}
    >
      <Gallery images={withAltText(project.images, text.images)} />
      <div className="p-7">
        <ProjectSummary kind={project.kind} text={text} featured />
        <Tags tags={project.tags} selected={selected} onSelect={onSelect} />
        <ProjectLinks links={project.links} labels={text.links} className="mt-7" />
      </div>
    </article>
  );
};

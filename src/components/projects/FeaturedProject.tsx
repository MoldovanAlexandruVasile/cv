import { useContent } from "../../hooks/useContent.ts";
import { useLanguage } from "../../hooks/useLanguage.ts";
import { SURFACE } from "../../styles/ui.ts";
import type { Project } from "../../types/cv.ts";
import type { SkillFilterProps } from "../../types/skillFilter.ts";
import { cx } from "@moldovanalexandruvasile/unity-marketing";
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
  const { language } = useLanguage();

  return (
    <article
      className={cx(
        SURFACE,
        "mb-4 grid grid-cols-[1.25fr_1fr] overflow-hidden max-md:grid-cols-1",
        skillMatchClass(project.tags, selected),
      )}
    >
      <Gallery images={withAltText(project.images, text.images, language)} />
      <div className="p-7 max-md:p-5">
        <ProjectSummary kind={project.kind} text={text} featured />
        <Tags tags={project.tags} selected={selected} onSelect={onSelect} />
        <ProjectLinks links={project.links} labels={text.links} className="mt-7" />
      </div>
    </article>
  );
};

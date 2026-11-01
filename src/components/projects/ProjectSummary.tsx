import type { Project } from "../../types/cv.ts";
import { CardTagline } from "../common/CardTagline.tsx";
import { CardText } from "../common/CardText.tsx";
import { CardTitle } from "../common/CardTitle.tsx";
import { KindLabel } from "../common/KindLabel.tsx";

type ProjectSummaryProps = {
  project: Project;
  featured?: boolean;
};

// Kind, name, tagline and description: the text both project layouts share.
export const ProjectSummary = ({ project, featured = false }: ProjectSummaryProps) => (
  <>
    <KindLabel variant={project.kind}>{featured ? `${project.kind} project` : project.kind}</KindLabel>
    <CardTitle large={featured}>{project.name}</CardTitle>
    <CardTagline>{project.tagline}</CardTagline>
    <CardText>{project.description}</CardText>
  </>
);

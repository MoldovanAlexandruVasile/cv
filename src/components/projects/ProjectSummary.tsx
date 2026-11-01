import { useTranslation } from "react-i18next";
import type { ProjectKind } from "../../types/cv.ts";
import type { ProjectText } from "../../types/content.ts";
import { CardTagline } from "../common/CardTagline.tsx";
import { CardText } from "../common/CardText.tsx";
import { CardTitle } from "../common/CardTitle.tsx";
import { KindLabel } from "../common/KindLabel.tsx";

type ProjectSummaryProps = {
  kind: ProjectKind;
  text: ProjectText;
  featured?: boolean;
};

// Kind, name, tagline and description: the text both project layouts share.
export const ProjectSummary = ({ kind, text, featured = false }: ProjectSummaryProps) => {
  const { t } = useTranslation();
  const kindLabel = t(`projects.kinds.${kind}`);

  return (
    <>
      <KindLabel variant={kind}>{featured ? t("projects.featuredKind", { kind: kindLabel }) : kindLabel}</KindLabel>
      <CardTitle large={featured}>{text.name}</CardTitle>
      <CardTagline>{text.tagline}</CardTagline>
      <CardText>{text.description}</CardText>
    </>
  );
};

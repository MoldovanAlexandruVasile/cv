import { useContent } from "../../hooks/useContent.ts";
import { Card } from "../common/Card.tsx";
import { CardTagline } from "../common/CardTagline.tsx";
import { CardText } from "../common/CardText.tsx";
import { CardTitle } from "../common/CardTitle.tsx";
import { KindLabel } from "../common/KindLabel.tsx";

type DegreeCardProps = {
  period: string;
};

export const DegreeCard = ({ period }: DegreeCardProps) => {
  const { education } = useContent();

  return (
    <Card>
      <KindLabel variant="academic">{period}</KindLabel>
      <CardTitle>{education.degree}</CardTitle>
      <CardTagline>{education.school}</CardTagline>
      <CardText>{education.note}</CardText>
    </Card>
  );
};

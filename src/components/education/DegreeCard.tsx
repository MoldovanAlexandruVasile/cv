import type { Education } from "../../types/cv.ts";
import { Card } from "../common/Card.tsx";
import { CardTagline } from "../common/CardTagline.tsx";
import { CardText } from "../common/CardText.tsx";
import { CardTitle } from "../common/CardTitle.tsx";
import { KindLabel } from "../common/KindLabel.tsx";

type DegreeCardProps = {
  education: Education;
};

export const DegreeCard = ({ education }: DegreeCardProps) => (
  <Card>
    <KindLabel variant="academic">{education.period}</KindLabel>
    <CardTitle>{education.degree}</CardTitle>
    <CardTagline>{education.school}</CardTagline>
    <CardText>{education.note}</CardText>
  </Card>
);

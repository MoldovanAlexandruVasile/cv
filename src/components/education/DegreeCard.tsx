import { CARD_TAGLINE, CARD_TEXT } from "../../styles/ui.ts";
import type { Education } from "../../types/cv.ts";
import { Card } from "../common/Card.tsx";
import { KindLabel } from "../common/KindLabel.tsx";

type DegreeCardProps = {
  education: Education;
};

export const DegreeCard = ({ education }: DegreeCardProps) => (
  <Card>
    <KindLabel variant="academic">{education.period}</KindLabel>
    <h3 className="mt-1.5 text-xl font-bold">{education.degree}</h3>
    <p className={CARD_TAGLINE}>{education.school}</p>
    <p className={CARD_TEXT}>{education.note}</p>
  </Card>
);

import { Card } from "../common/Card.tsx";
import { CardTitle } from "../common/CardTitle.tsx";
import { KindLabel } from "../common/KindLabel.tsx";

type LanguagesCardProps = {
  languages: string[];
};

export const LanguagesCard = ({ languages }: LanguagesCardProps) => (
  <Card>
    <KindLabel>Languages</KindLabel>
    <CardTitle>{languages.join(" · ")}</CardTitle>
  </Card>
);

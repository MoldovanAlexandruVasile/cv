import { Card } from "../common/Card.tsx";
import { KindLabel } from "../common/KindLabel.tsx";

type LanguagesCardProps = {
  languages: string[];
};

export const LanguagesCard = ({ languages }: LanguagesCardProps) => (
  <Card>
    <KindLabel>Languages</KindLabel>
    <h3 className="mt-1.5 text-xl font-bold">{languages.join(" · ")}</h3>
  </Card>
);

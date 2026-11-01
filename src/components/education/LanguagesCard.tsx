import { useTranslation } from "react-i18next";
import { useContent } from "../../hooks/useContent.ts";
import { Card } from "../common/Card.tsx";
import { CardTitle } from "../common/CardTitle.tsx";
import { KindLabel } from "../common/KindLabel.tsx";

export const LanguagesCard = () => {
  const { t } = useTranslation();
  const { profile } = useContent();

  return (
    <Card>
      <KindLabel>{t("education.languages")}</KindLabel>
      <CardTitle>{profile.languages.join(" · ")}</CardTitle>
    </Card>
  );
};

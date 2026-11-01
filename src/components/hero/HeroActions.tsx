import { useTranslation } from "react-i18next";
import { profile } from "../../data/profile.ts";
import { ACTIONS, BUTTON } from "../../styles/ui.ts";
import { ExternalButton } from "../common/ExternalButton.tsx";
import { ContactMenu } from "../contact/ContactMenu.tsx";

export const HeroActions = () => {
  const { t } = useTranslation();

  return (
    <div className={`${ACTIONS} mt-7`}>
      <ContactMenu email={profile.email} />
      <ExternalButton href={profile.github}>{t("hero.github")}</ExternalButton>
      <a className={BUTTON} href="#projects">
        {t("hero.seeProjects")}
      </a>
    </div>
  );
};

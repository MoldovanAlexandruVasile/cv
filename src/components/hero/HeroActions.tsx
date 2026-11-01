import { useTranslation } from "react-i18next";
import { profile } from "../../data/profile.ts";
import { ACTIONS, BUTTON } from "../../styles/ui.ts";
import { ExternalButton } from "../common/ExternalButton.tsx";
import { ContactMenu } from "../contact/ContactMenu.tsx";

// On phones: "Get in touch" spans the full width, the other two share a row.
export const HeroActions = () => {
  const { t } = useTranslation();

  return (
    <div className={`${ACTIONS} mt-7 max-md:grid max-md:grid-cols-2`}>
      <ContactMenu email={profile.email} className="max-md:col-span-2" />
      <ExternalButton href={profile.github} className="max-md:justify-center">
        {t("hero.github")}
      </ExternalButton>
      <a className={`${BUTTON} max-md:justify-center`} href="#projects">
        {t("hero.seeProjects")}
      </a>
    </div>
  );
};

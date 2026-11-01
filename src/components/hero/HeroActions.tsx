import { profile } from "../../data/profile.ts";
import { ACTIONS, BUTTON } from "../../styles/ui.ts";
import { ExternalButton } from "../common/ExternalButton.tsx";
import { ContactMenu } from "../contact/ContactMenu.tsx";

export const HeroActions = () => (
  <div className={`${ACTIONS} mt-7`}>
    <ContactMenu email={profile.email} />
    <ExternalButton href={profile.github}>GitHub</ExternalButton>
    <a className={BUTTON} href="#projects">
      See projects ↓
    </a>
  </div>
);

import { useTranslation } from "react-i18next";
import { BUTTON_PRIMARY } from "../../styles/ui.ts";

type ContactTriggerProps = {
  open: boolean;
  onToggle: () => void;
};

export const ContactTrigger = ({ open, onToggle }: ContactTriggerProps) => {
  const { t } = useTranslation();

  return (
    <button
      className={`${BUTTON_PRIMARY} max-md:w-full max-md:justify-center`}
      aria-haspopup="menu"
      aria-expanded={open}
      onClick={onToggle}
    >
      {t("contact.trigger")}
    </button>
  );
};

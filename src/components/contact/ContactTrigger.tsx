import { BUTTON_PRIMARY } from "../../styles/ui.ts";

type ContactTriggerProps = {
  open: boolean;
  onToggle: () => void;
};

export const ContactTrigger = ({ open, onToggle }: ContactTriggerProps) => (
  <button className={BUTTON_PRIMARY} aria-haspopup="menu" aria-expanded={open} onClick={onToggle}>
    Get in touch
  </button>
);

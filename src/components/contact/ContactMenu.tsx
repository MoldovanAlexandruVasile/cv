import { useRef } from "react";
import { useDismiss } from "../../hooks/useDismiss.ts";
import { useToggle } from "../../hooks/useToggle.ts";
import { BUTTON_PRIMARY } from "../../styles/ui.ts";
import { ContactMenuList } from "./ContactMenuList.tsx";

type ContactMenuProps = {
  email: string;
};

export const ContactMenu = ({ email }: ContactMenuProps) => {
  const { on: open, toggle, close } = useToggle();
  const ref = useRef<HTMLDivElement>(null);
  useDismiss(ref, open, close);

  return (
    <div className="relative" ref={ref}>
      <button className={BUTTON_PRIMARY} aria-haspopup="menu" aria-expanded={open} onClick={toggle}>
        Get in touch
      </button>
      {open && <ContactMenuList email={email} onPick={close} />}
    </div>
  );
};

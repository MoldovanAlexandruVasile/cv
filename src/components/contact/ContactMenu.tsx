import { useRef } from "react";
import { useDismiss } from "../../hooks/useDismiss.ts";
import { useToggle } from "../../hooks/useToggle.ts";
import { ContactMenuList } from "./ContactMenuList.tsx";
import { ContactTrigger } from "./ContactTrigger.tsx";

type ContactMenuProps = {
  email: string;
};

export const ContactMenu = ({ email }: ContactMenuProps) => {
  const { on: open, toggle, close } = useToggle();
  const ref = useRef<HTMLDivElement>(null);
  useDismiss(ref, open, close);

  return (
    <div className="relative" ref={ref}>
      <ContactTrigger open={open} onToggle={toggle} />
      {open && <ContactMenuList email={email} onPick={close} />}
    </div>
  );
};

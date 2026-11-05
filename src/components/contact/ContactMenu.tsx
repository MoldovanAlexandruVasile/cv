import { cx, useDropdown } from "@moldovanalexandruvasile/unity-marketing";
import { ContactMenuList } from "./ContactMenuList.tsx";
import { ContactTrigger } from "./ContactTrigger.tsx";

type ContactMenuProps = {
  email: string;
  className?: string;
};

export const ContactMenu = ({ email, className }: ContactMenuProps) => {
  const { root: ref, isOpen: open, toggle, close } = useDropdown();

  return (
    <div className={cx("relative", className)} ref={ref}>
      <ContactTrigger open={open} onToggle={toggle} />
      {open && <ContactMenuList email={email} onPick={close} />}
    </div>
  );
};

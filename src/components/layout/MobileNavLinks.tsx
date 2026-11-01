import { NAV_IDS } from "../../constants/navigation.ts";
import { useScrollIntoRow } from "../../hooks/useScrollIntoRow.ts";
import { NavItem } from "./NavItem.tsx";

type MobileNavLinksProps = {
  active: string | null;
};

// Phones have no room for the links beside the brand, so they get their own
// scrollable row under it.
export const MobileNavLinks = ({ active }: MobileNavLinksProps) => {
  const rowRef = useScrollIntoRow<HTMLElement>(active);

  return (
    <nav
      ref={rowRef}
      className="-mt-1 flex gap-1 overflow-x-auto px-4 pb-2 [scrollbar-width:none] md:hidden"
    >
      {NAV_IDS.map((id) => (
        <NavItem key={id} id={id} active={active === id} />
      ))}
    </nav>
  );
};

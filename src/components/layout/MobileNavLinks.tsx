import { HEADER_GAP } from "../../constants/header.ts";
import { NAV_IDS } from "../../constants/navigation.ts";
import { NavItem } from "./NavItem.tsx";

// Phones have no room for the links beside the brand, so they get their own
// scrollable row under it.
export const MobileNavLinks = () => (
  <nav className={`-mt-1 flex ${HEADER_GAP} overflow-x-auto px-4 pb-2.5 [scrollbar-width:none] md:hidden`}>
    {NAV_IDS.map((id) => (
      <NavItem key={id} id={id} />
    ))}
  </nav>
);

import { HEADER_GAP } from "../../constants/header.ts";
import { NAV_IDS } from "../../constants/navigation.ts";
import { NavItem } from "./NavItem.tsx";

export const NavLinks = () => (
  <nav className={`ml-auto flex ${HEADER_GAP} max-md:hidden`}>
    {NAV_IDS.map((id) => (
      <NavItem key={id} id={id} />
    ))}
  </nav>
);

import { NAV_IDS } from "../../constants/navigation.ts";
import { NavItem } from "./NavItem.tsx";

export const NavLinks = () => (
  <nav className="ml-auto flex gap-1 max-md:hidden">
    {NAV_IDS.map((id) => (
      <NavItem key={id} id={id} />
    ))}
  </nav>
);

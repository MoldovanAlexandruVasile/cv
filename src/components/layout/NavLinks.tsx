import { NAV_IDS } from "../../constants/navigation.ts";
import { NavItem } from "./NavItem.tsx";

type NavLinksProps = {
  active: string | null;
};

export const NavLinks = ({ active }: NavLinksProps) => (
  <nav className="ml-auto flex gap-1 max-md:hidden">
    {NAV_IDS.map((id) => (
      <NavItem key={id} id={id} active={active === id} />
    ))}
  </nav>
);

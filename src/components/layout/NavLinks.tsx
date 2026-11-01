import { NAV_IDS } from "../../constants/navigation.ts";
import { useActiveSection } from "../../hooks/useActiveSection.ts";
import { NavItem } from "./NavItem.tsx";

export const NavLinks = () => {
  const active = useActiveSection(NAV_IDS);

  return (
    <nav className="ml-auto flex gap-1 max-md:hidden">
      {NAV_IDS.map((id) => (
        <NavItem key={id} id={id} active={active === id} />
      ))}
    </nav>
  );
};

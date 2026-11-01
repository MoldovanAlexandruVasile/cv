import { NAV_LINKS, SECTION_IDS } from "../../constants/navigation.ts";
import { useActiveSection } from "../../hooks/useActiveSection.ts";
import { NavItem } from "./NavItem.tsx";

export const NavLinks = () => {
  const active = useActiveSection(SECTION_IDS);

  return (
    <nav className="ml-auto flex gap-1 max-md:hidden">
      {NAV_LINKS.map((link) => (
        <NavItem key={link.id} link={link} active={active === link.id} />
      ))}
    </nav>
  );
};

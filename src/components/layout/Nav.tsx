import { NAV_IDS } from "../../constants/navigation.ts";
import { useActiveSection } from "../../hooks/useActiveSection.ts";
import { Brand } from "./Brand.tsx";
import { HeaderControls } from "./HeaderControls.tsx";
import { MobileNavLinks } from "./MobileNavLinks.tsx";
import { NavLinks } from "./NavLinks.tsx";

export const Nav = () => {
  const active = useActiveSection(NAV_IDS);

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-page/85 backdrop-blur-md">
      <div className="flex h-16 items-center gap-6 px-6 max-md:px-4">
        <Brand />
        <NavLinks active={active} />
        <HeaderControls />
      </div>
      <MobileNavLinks active={active} />
    </header>
  );
};

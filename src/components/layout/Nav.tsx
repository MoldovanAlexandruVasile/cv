import { HEADER_GAP } from "../../constants/header.ts";
import { Brand } from "./Brand.tsx";
import { HeaderControls } from "./HeaderControls.tsx";
import { MobileNavLinks } from "./MobileNavLinks.tsx";
import { NavLinks } from "./NavLinks.tsx";

export const Nav = () => (
  <header className="sticky top-0 z-10 border-b border-line bg-page/85 backdrop-blur-md">
    <div className={`flex h-16 items-center ${HEADER_GAP} px-6 max-md:px-4`}>
      <Brand />
      <NavLinks />
      <HeaderControls />
    </div>
    <MobileNavLinks />
  </header>
);

import { Brand } from "./Brand.tsx";
import { NavLinks } from "./NavLinks.tsx";
import { ThemeToggle } from "./ThemeToggle.tsx";

export const Nav = () => (
  <header className="sticky top-0 z-10 flex h-16 items-center gap-6 border-b border-line bg-page/85 px-6 backdrop-blur-md max-md:px-4">
    <Brand />
    <NavLinks />
    <ThemeToggle />
  </header>
);

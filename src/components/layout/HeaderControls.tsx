import { LanguageDropdown } from "./LanguageDropdown.tsx";
import { ThemeToggle } from "./ThemeToggle.tsx";

export const HeaderControls = () => (
  <div className="flex items-center gap-2 max-md:ml-auto">
    <LanguageDropdown />
    <ThemeToggle />
  </div>
);

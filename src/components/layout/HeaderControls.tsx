import { HEADER_GAP } from "../../constants/header.ts";
import { LanguageDropdown } from "./LanguageDropdown.tsx";
import { ThemeToggle } from "./ThemeToggle.tsx";

export const HeaderControls = () => (
  <div className={`flex items-center ${HEADER_GAP} max-md:ml-auto`}>
    <LanguageDropdown />
    <ThemeToggle />
  </div>
);

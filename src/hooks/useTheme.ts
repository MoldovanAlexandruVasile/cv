import { useEffect, useState } from "react";
import { applyTheme, oppositeTheme, readInitialTheme } from "../utils/theme.ts";

export const useTheme = () => {
  const [theme, setTheme] = useState(readInitialTheme);

  useEffect(() => applyTheme(theme), [theme]);

  const toggleTheme = () => setTheme(oppositeTheme);

  return [theme, toggleTheme] as const;
};

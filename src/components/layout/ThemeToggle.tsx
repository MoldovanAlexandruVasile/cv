import { useTheme } from "../../hooks/useTheme.ts";
import { oppositeTheme } from "../../utils/theme.ts";

export const ThemeToggle = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <button
      className="size-9 rounded-full border border-line bg-surface max-md:ml-auto"
      onClick={toggleTheme}
      aria-label={`Switch to ${oppositeTheme(theme)} mode`}
    >
      {theme === "dark" ? "☀" : "☾"}
    </button>
  );
};

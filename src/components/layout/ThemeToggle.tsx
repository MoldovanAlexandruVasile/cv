import { useTranslation } from "react-i18next";
import { useTheme } from "../../hooks/useTheme.ts";
import { oppositeTheme } from "../../utils/theme.ts";

export const ThemeToggle = () => {
  const { t } = useTranslation();
  const [theme, toggleTheme] = useTheme();

  return (
    <button
      className="size-9 rounded-full border border-line bg-surface"
      onClick={toggleTheme}
      aria-label={t("theme.switchTo", { mode: t(`theme.${oppositeTheme(theme)}`) })}
    >
      {theme === "dark" ? "☀" : "☾"}
    </button>
  );
};

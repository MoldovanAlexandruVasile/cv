import type { Theme } from "../types/theme.ts";

const STORAGE_KEY = "theme";

export const readInitialTheme = (): Theme => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    // Storage blocked: fall back to the system preference.
  }
  return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export const applyTheme = (theme: Theme) => {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Not persisted; the toggle still works for this visit.
  }
};

export const oppositeTheme = (theme: Theme): Theme => (theme === "dark" ? "light" : "dark");

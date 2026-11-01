// Formats "YYYY-MM" as a short month and year in the given language:
// "Nov 2026" in English, "nov. 2026" in Romanian.
export const formatMonth = (yearMonth: string, language: string) => {
  const [year, month] = yearMonth.split("-").map(Number);
  return new Intl.DateTimeFormat(language, { month: "short", year: "numeric" }).format(new Date(year, month - 1));
};

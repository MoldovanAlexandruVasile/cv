// Formats "YYYY-MM" as a short month and year in the given language:
// "Nov 2026" in English, "nov. 2026" in Romanian.
export const formatMonth = (yearMonth: string, language: string) => {
  const [year, month] = yearMonth.split("-").map(Number);
  return new Intl.DateTimeFormat(language, { month: "short", year: "numeric" }).format(new Date(year, month - 1));
};

// Whole years from "YYYY-MM" until `today`. A year only counts once its month
// is reached: from 2019-09 that's 7 in Aug 2027 and 8 from Sep 2027.
export const fullYearsSince = (yearMonth: string, today = new Date()) => {
  const [year, month] = yearMonth.split("-").map(Number);
  const months = (today.getFullYear() - year) * 12 + (today.getMonth() + 1 - month);
  return Math.floor(months / 12);
};

import { formatMonth } from "../utils/dates.ts";
import { useLanguage } from "./useLanguage.ts";

export const useFormatMonth = () => {
  const { language } = useLanguage();
  return (yearMonth: string) => formatMonth(yearMonth, language);
};

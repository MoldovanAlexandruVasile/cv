import { useTranslation } from "react-i18next";
import { useFormatMonth } from "../../hooks/useFormatMonth.ts";

type JobDatesProps = {
  start: string;
  end?: string;
};

export const JobDates = ({ start, end }: JobDatesProps) => {
  const { t } = useTranslation();
  const formatMonth = useFormatMonth();

  return (
    <span className="font-mono text-xs font-medium text-accent">
      {formatMonth(start)} – {end ? formatMonth(end) : t("experience.present")}
    </span>
  );
};

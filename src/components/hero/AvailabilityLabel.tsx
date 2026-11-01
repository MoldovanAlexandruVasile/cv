import { useTranslation } from "react-i18next";
import { StatusDot } from "../common/StatusDot.tsx";

export const AvailabilityLabel = () => {
  const { t } = useTranslation();

  return (
    <span className="mr-1 inline-flex items-center gap-2 text-sm font-semibold">
      <StatusDot />
      {t("hero.availableAs")}
    </span>
  );
};

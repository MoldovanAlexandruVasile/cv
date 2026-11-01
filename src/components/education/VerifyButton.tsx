import { useTranslation } from "react-i18next";
import { ACTIONS } from "../../styles/ui.ts";
import { ExternalButton } from "../common/ExternalButton.tsx";

type VerifyButtonProps = {
  url: string;
};

export const VerifyButton = ({ url }: VerifyButtonProps) => {
  const { t } = useTranslation();

  return (
    <div className={`${ACTIONS} justify-center pt-4`}>
      <ExternalButton href={url}>{t("education.verify")}</ExternalButton>
    </div>
  );
};

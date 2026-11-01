import { useTranslation } from "react-i18next";

type ClearSkillButtonProps = {
  onClear: () => void;
};

export const ClearSkillButton = ({ onClear }: ClearSkillButtonProps) => {
  const { t } = useTranslation();

  return (
    <button className="text-accent underline" onClick={onClear}>
      {t("skills.clear")}
    </button>
  );
};

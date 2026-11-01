import { useTranslation } from "react-i18next";
import type { SkillFilterProps } from "../../types/skillFilter.ts";
import { ClearSkillButton } from "./ClearSkillButton.tsx";
import { SkillUsage } from "./SkillUsage.tsx";

export const SkillsHint = ({ selected, onSelect }: SkillFilterProps) => {
  const { t } = useTranslation();

  return (
    <p className="mb-6 min-h-[1.6em] text-muted">
      {selected ? (
        <>
          <SkillUsage skill={selected} /> <ClearSkillButton onClear={() => onSelect(selected)} />
        </>
      ) : (
        t("skills.idle")
      )}
    </p>
  );
};

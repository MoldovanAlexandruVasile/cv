import { useContent } from "../../hooks/useContent.ts";
import { SURFACE } from "../../styles/ui.ts";
import type { SkillGroup } from "../../types/cv.ts";
import type { SkillFilterProps } from "../../types/skillFilter.ts";
import { Tags } from "../common/Tags.tsx";

type SkillGroupCardProps = SkillFilterProps & {
  group: SkillGroup;
};

export const SkillGroupCard = ({ group, selected, onSelect }: SkillGroupCardProps) => {
  const { skillGroups } = useContent();

  return (
    <div className={`${SURFACE} border-line p-5 max-md:p-4`}>
      <h3 className="text-[13px] font-bold uppercase tracking-[0.06em] text-muted">{skillGroups[group.id]}</h3>
      <Tags tags={group.skills} selected={selected} onSelect={onSelect} className="mt-3" />
    </div>
  );
};

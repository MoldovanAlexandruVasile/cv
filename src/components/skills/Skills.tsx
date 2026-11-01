import { useTranslation } from "react-i18next";
import { skillGroups } from "../../data/skills.ts";
import type { SkillFilterProps } from "../../types/skillFilter.ts";
import { CardGrid } from "../common/CardGrid.tsx";
import { Section } from "../common/Section.tsx";
import { SkillGroupCard } from "./SkillGroupCard.tsx";
import { SkillsHint } from "./SkillsHint.tsx";

export const Skills = ({ selected, onSelect }: SkillFilterProps) => {
  const { t } = useTranslation();

  return (
    <Section id="skills" title={t("skills.title")}>
      <SkillsHint selected={selected} onSelect={onSelect} />
      <CardGrid>
        {skillGroups.map((group) => (
          <SkillGroupCard key={group.id} group={group} selected={selected} onSelect={onSelect} />
        ))}
      </CardGrid>
    </Section>
  );
};

import { skillGroups } from "../../data/skills.ts";
import { CARD_GRID } from "../../styles/ui.ts";
import type { SkillFilterProps } from "../../types/skillFilter.ts";
import { Section } from "../common/Section.tsx";
import { SkillGroupCard } from "./SkillGroupCard.tsx";
import { SkillsHint } from "./SkillsHint.tsx";

export const Skills = ({ selected, onSelect }: SkillFilterProps) => (
  <Section id="skills" title="Skills">
    <SkillsHint selected={selected} onSelect={onSelect} />
    <div className={CARD_GRID}>
      {skillGroups.map((group) => (
        <SkillGroupCard key={group.name} group={group} selected={selected} onSelect={onSelect} />
      ))}
    </div>
  </Section>
);

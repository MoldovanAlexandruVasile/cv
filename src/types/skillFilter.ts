// Shared by every section that reacts to the selected skill.
export type SkillFilterProps = {
  selected: string | null;
  onSelect: (skill: string) => void;
};

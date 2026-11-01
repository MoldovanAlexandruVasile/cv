// null when no skill is selected, so nothing is dimmed or highlighted.
export const matchesSkill = (tags: string[], selected: string | null) =>
  selected ? tags.includes(selected) : null;

// Opacity and border colour for a card that reacts to the selected skill.
export const skillMatchClass = (tags: string[], selected: string | null) => {
  const match = matchesSkill(tags, selected);
  if (match === false) return "border-line opacity-35";
  if (match === true) return "border-accent";
  return "border-line";
};

export const countWithSkill = (items: { tags: string[] }[], skill: string | null) =>
  skill ? items.filter((item) => item.tags.includes(skill)).length : 0;

import type { SkillFilterProps } from "../../types/skillFilter.ts";
import { cx } from "@moldovanalexandruvasile/unity-marketing";
import { Tag } from "./Tag.tsx";

type TagsProps = SkillFilterProps & {
  tags: string[];
  className?: string;
};

export const Tags = ({ tags, selected, onSelect, className = "mt-4" }: TagsProps) => (
  <ul className={cx("flex flex-wrap gap-1.5", className)}>
    {tags.map((tag) => (
      <li key={tag}>
        <Tag label={tag} active={selected === tag} onSelect={onSelect} />
      </li>
    ))}
  </ul>
);

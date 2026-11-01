type Props = {
  tags: string[];
  selected: string | null;
  onSelect: (tag: string) => void;
};

export function Tags({ tags, selected, onSelect }: Props) {
  return (
    <ul className="tags">
      {tags.map((t) => (
        <li key={t}>
          <button
            className={`tag${selected === t ? " tag--on" : ""}`}
            aria-pressed={selected === t}
            onClick={(e) => {
              e.stopPropagation();
              onSelect(t);
            }}
          >
            {t}
          </button>
        </li>
      ))}
    </ul>
  );
}

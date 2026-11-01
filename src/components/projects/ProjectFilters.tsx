import { PROJECT_FILTERS, type ProjectFilter } from "../../constants/projectFilters.ts";
import { classNames } from "../../utils/classNames.ts";

type ProjectFiltersProps = {
  value: ProjectFilter;
  onChange: (filter: ProjectFilter) => void;
};

export const ProjectFilters = ({ value, onChange }: ProjectFiltersProps) => (
  <div className="inline-flex rounded-full border border-line bg-surface p-1" role="tablist">
    {PROJECT_FILTERS.map((filter) => {
      const active = value === filter.value;
      return (
        <button
          key={filter.value}
          role="tab"
          aria-selected={active}
          className={classNames(
            "rounded-full px-3.5 py-1.5 text-sm font-medium",
            active ? "bg-accent text-white" : "text-muted",
          )}
          onClick={() => onChange(filter.value)}
        >
          {filter.label}
        </button>
      );
    })}
  </div>
);

import { PROJECT_FILTERS, type ProjectFilter } from "../../constants/projectFilters.ts";
import { FilterTab } from "./FilterTab.tsx";

type ProjectFiltersProps = {
  value: ProjectFilter;
  onChange: (filter: ProjectFilter) => void;
};

export const ProjectFilters = ({ value, onChange }: ProjectFiltersProps) => (
  <div className="inline-flex rounded-full border border-line bg-surface p-1" role="tablist">
    {PROJECT_FILTERS.map((filter) => (
      <FilterTab
        key={filter.value}
        label={filter.label}
        active={value === filter.value}
        onClick={() => onChange(filter.value)}
      />
    ))}
  </div>
);

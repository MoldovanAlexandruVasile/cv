import { useTranslation } from "react-i18next";
import { PROJECT_FILTERS, type ProjectFilter } from "../../constants/projectFilters.ts";
import { FilterTab } from "./FilterTab.tsx";

type ProjectFiltersProps = {
  value: ProjectFilter;
  onChange: (filter: ProjectFilter) => void;
};

export const ProjectFilters = ({ value, onChange }: ProjectFiltersProps) => {
  const { t } = useTranslation();

  return (
    <div
      className="inline-flex max-w-full overflow-x-auto rounded-full border border-line bg-surface p-1 [scrollbar-width:none]"
      role="tablist"
    >
      {PROJECT_FILTERS.map((filter) => (
        <FilterTab
          key={filter}
          label={t(`projects.filters.${filter}`)}
          active={value === filter}
          onClick={() => onChange(filter)}
        />
      ))}
    </div>
  );
};

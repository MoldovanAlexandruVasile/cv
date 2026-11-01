import { classNames } from "../../utils/classNames.ts";

type FilterTabProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

export const FilterTab = ({ label, active, onClick }: FilterTabProps) => (
  <button
    role="tab"
    aria-selected={active}
    className={classNames("rounded-full px-3.5 py-1.5 text-sm font-medium", active ? "bg-accent text-white" : "text-muted")}
    onClick={onClick}
  >
    {label}
  </button>
);

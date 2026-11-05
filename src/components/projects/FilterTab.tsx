import { cx } from "@moldovanalexandruvasile/unity-marketing";

type FilterTabProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

export const FilterTab = ({ label, active, onClick }: FilterTabProps) => (
  <button
    role="tab"
    aria-selected={active}
    className={cx("shrink-0 rounded-full px-3.5 py-1.5 text-sm font-medium max-md:px-2.5 max-md:text-[13px]", active ? "bg-accent text-white" : "text-muted")}
    onClick={onClick}
  >
    {label}
  </button>
);

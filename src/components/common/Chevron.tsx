import { classNames } from "../../utils/classNames.ts";

type ChevronProps = {
  open: boolean;
};

export const Chevron = ({ open }: ChevronProps) => (
  <span
    className={classNames(
      "col-start-2 row-span-3 row-start-1 self-center text-2xl text-muted transition-transform duration-200",
      open && "rotate-90",
    )}
    aria-hidden
  >
    ›
  </span>
);

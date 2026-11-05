import { cx } from "@moldovanalexandruvasile/unity-marketing";

type ChevronProps = {
  open: boolean;
  // "right" turns down when open (accordions); "down" flips up when open (dropdowns).
  direction?: "right" | "down";
  className?: string;
};

export const Chevron = ({ open, direction = "right", className }: ChevronProps) => (
  <span
    className={cx(
      "leading-none text-muted transition-transform duration-200",
      direction === "right" ? (open ? "rotate-90" : "") : open ? "-rotate-90" : "rotate-90",
      className,
    )}
    aria-hidden
  >
    ›
  </span>
);

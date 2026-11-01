import { classNames } from "../../utils/classNames.ts";

type GalleryArrowProps = {
  direction: "prev" | "next";
  onClick: () => void;
};

// Hidden until the frame is hovered on desktop; always visible on touch-sized screens.
export const GalleryArrow = ({ direction, onClick }: GalleryArrowProps) => (
  <button
    className={classNames(
      "absolute top-1/2 size-9 -translate-y-1/2 rounded-full bg-black/45 text-[22px] leading-none text-white",
      "opacity-0 transition-opacity duration-200 group-hover:opacity-100 focus-visible:opacity-100 max-md:opacity-100",
      direction === "prev" ? "left-2.5" : "right-2.5",
    )}
    onClick={onClick}
    aria-label={direction === "prev" ? "Previous screenshot" : "Next screenshot"}
  >
    {direction === "prev" ? "‹" : "›"}
  </button>
);

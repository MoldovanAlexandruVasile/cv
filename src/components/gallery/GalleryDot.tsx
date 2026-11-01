import { classNames } from "../../utils/classNames.ts";

type GalleryDotProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

export const GalleryDot = ({ label, active, onClick }: GalleryDotProps) => (
  <button
    className={classNames(
      "h-2 rounded-full transition-[width,background-color] duration-200",
      active ? "w-6 bg-accent" : "w-2 bg-line",
    )}
    onClick={onClick}
    aria-label={`Show ${label}`}
  />
);

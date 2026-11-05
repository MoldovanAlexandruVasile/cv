import { useTranslation } from "react-i18next";
import { cx } from "@moldovanalexandruvasile/unity-marketing";

type GalleryDotProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

export const GalleryDot = ({ label, active, onClick }: GalleryDotProps) => {
  const { t } = useTranslation();

  return (
    <button
      className={cx(
        "h-2 rounded-full transition-[width,background-color] duration-200",
        active ? "w-6 bg-accent" : "w-2 bg-line",
      )}
      onClick={onClick}
      aria-label={t("gallery.show", { label })}
    />
  );
};

import { useTranslation } from "react-i18next";
import type { NavId } from "../../types/navigation.ts";
import { classNames } from "../../utils/classNames.ts";

type NavItemProps = {
  id: NavId;
  active: boolean;
};

export const NavItem = ({ id, active }: NavItemProps) => {
  const { t } = useTranslation();

  return (
    <a
      href={`#${id}`}
      className={classNames(
        "rounded-full px-3 py-1.5 text-sm transition-colors duration-200",
        active ? "bg-accent-soft font-semibold text-accent" : "font-medium text-muted hover:text-ink",
      )}
      aria-current={active ? "location" : undefined}
    >
      {t(`nav.${id}`)}
    </a>
  );
};

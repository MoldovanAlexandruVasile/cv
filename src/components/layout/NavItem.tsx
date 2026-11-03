import { useTranslation } from "react-i18next";
import type { NavId } from "../../types/navigation.ts";

type NavItemProps = {
  id: NavId;
};

export const NavItem = ({ id }: NavItemProps) => {
  const { t } = useTranslation();

  return (
    <a
      href={`#${id}`}
      className="shrink-0 py-1.5 text-sm font-medium text-muted transition-colors duration-200 hover:text-ink"
    >
      {t(`nav.${id}`)}
    </a>
  );
};

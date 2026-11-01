import type { NavLink } from "../../types/navigation.ts";
import { classNames } from "../../utils/classNames.ts";

type NavItemProps = {
  link: NavLink;
  active: boolean;
};

export const NavItem = ({ link, active }: NavItemProps) => (
  <a
    href={`#${link.id}`}
    className={classNames(
      "rounded-full px-3 py-1.5 text-sm transition-colors duration-200",
      active ? "bg-accent-soft font-semibold text-accent" : "font-medium text-muted hover:text-ink",
    )}
    aria-current={active ? "location" : undefined}
  >
    {link.label}
  </a>
);

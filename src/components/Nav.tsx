import { useActiveSection } from "../useActiveSection.ts";
import { useTheme } from "../useTheme.ts";

const links = [
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["education", "Education"],
] as const;
const ids = links.map(([id]) => id);

export function Nav() {
  const [theme, toggle] = useTheme();
  const active = useActiveSection(ids);
  return (
    <header className="nav">
      <a className="nav__brand" href="#top">
        AM<span>.</span>
      </a>
      <nav className="nav__links">
        {links.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? "on" : undefined}
            aria-current={active === id ? "location" : undefined}
          >
            {label}
          </a>
        ))}
      </nav>
      <button
        className="icon-btn"
        onClick={toggle}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        {theme === "dark" ? "☀" : "☾"}
      </button>
    </header>
  );
}

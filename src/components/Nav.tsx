import { useTheme } from "../useTheme.ts";

const links = [
  ["#skills", "Skills"],
  ["#experience", "Experience"],
  ["#projects", "Projects"],
  ["#education", "Education"],
] as const;

export function Nav() {
  const [theme, toggle] = useTheme();
  return (
    <header className="nav">
      <a className="nav__brand" href="#top">
        AM<span>.</span>
      </a>
      <nav className="nav__links">
        {links.map(([href, label]) => (
          <a key={href} href={href}>
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

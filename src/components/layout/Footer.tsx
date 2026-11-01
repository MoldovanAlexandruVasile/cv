import { profile } from "../../data/profile.ts";
import { CONTAINER } from "../../styles/ui.ts";

const YEAR = new Date().getFullYear();

export const Footer = () => (
  <footer className={`${CONTAINER} border-t border-line pt-10 pb-14 text-sm text-muted`}>
    <p>
      © {YEAR} {profile.name} ·{" "}
      <a className="text-accent underline" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
    </p>
  </footer>
);

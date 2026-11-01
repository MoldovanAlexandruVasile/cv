// Tailwind class strings shared by several components.
// Border colours are kept out of SURFACE so callers can pick one without two
// border-colour utilities fighting over the same element.

export const CONTAINER = "mx-auto max-w-[1080px] px-6 max-md:px-4";

export const SURFACE =
  "rounded-2xl border bg-surface shadow-card transition-[opacity,border-color,translate] duration-200";

export const ACTIONS = "flex flex-wrap gap-2.5";

const BUTTON_BASE =
  "inline-flex items-center rounded-full border px-[18px] py-2.5 text-sm font-medium no-underline transition-[translate,border-color] duration-150 hover:-translate-y-px";

export const BUTTON = `${BUTTON_BASE} border-line bg-surface text-ink hover:border-accent`;

export const BUTTON_PRIMARY = `${BUTTON_BASE} border-accent bg-accent text-white`;

export const buttonClass = (primary = false) => (primary ? BUTTON_PRIMARY : BUTTON);

export const EYEBROW = "font-mono text-[11px] font-medium uppercase tracking-[0.08em]";

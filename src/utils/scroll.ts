import { SCROLL_OFFSET } from "../constants/layout.ts";

export const isScrolledToBottom = () =>
  window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

// The last section whose top has passed under the nav bar.
export const findSectionAtTop = (ids: readonly string[]) =>
  ids.reduce<string | null>((current, id) => {
    const top = document.getElementById(id)?.getBoundingClientRect().top;
    return top !== undefined && top <= SCROLL_OFFSET + 1 ? id : current;
  }, null);

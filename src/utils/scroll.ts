export const isScrolledToBottom = () =>
  window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

// The sticky header's height plus breathing room, as set in index.css.
const headerOffset = () => parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;

// The last section whose top has passed under the header.
export const findSectionAtTop = (ids: readonly string[]) => {
  const offset = headerOffset();
  return ids.reduce<string | null>((current, id) => {
    const top = document.getElementById(id)?.getBoundingClientRect().top;
    return top !== undefined && top <= offset + 1 ? id : current;
  }, null);
};

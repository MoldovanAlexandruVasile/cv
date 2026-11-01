import { useEffect, useRef } from "react";

// Where `row` must scroll to so `item` sits in its middle (clamped by the browser).
const centeredScrollLeft = (row: HTMLElement, item: HTMLElement) => {
  const offsetInRow = item.getBoundingClientRect().left - row.getBoundingClientRect().left + row.scrollLeft;
  return offsetInRow - (row.clientWidth - item.offsetWidth) / 2;
};

// Scrolls a horizontal row so its active child is visible, without moving the page.
export const useScrollIntoRow = <T extends HTMLElement>(activeKey: string | null) => {
  const rowRef = useRef<T>(null);

  useEffect(() => {
    const row = rowRef.current;
    const item = row?.querySelector<HTMLElement>('[aria-current="location"]');
    if (!row || !item) return;
    row.scrollTo({ left: centeredScrollLeft(row, item), behavior: "smooth" });
  }, [activeKey]);

  return rowRef;
};

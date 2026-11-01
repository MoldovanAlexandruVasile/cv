import { useEffect, useState } from "react";
import { findSectionAtTop, isScrolledToBottom } from "../utils/scroll.ts";

// Returns the id of the section the reader is in, or null above the first one.
export const useActiveSection = (ids: readonly string[]) => {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      // The last section may be too short to ever reach the top.
      setActive(isScrolledToBottom() ? ids[ids.length - 1] : findSectionAtTop(ids));
    };

    const scheduleUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      cancelAnimationFrame(frame);
    };
  }, [ids]);

  return active;
};

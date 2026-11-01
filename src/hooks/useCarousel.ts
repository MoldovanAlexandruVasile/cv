import { useState } from "react";

export const useCarousel = (length: number) => {
  const [index, setIndex] = useState(0);

  const step = (delta: number) => setIndex((current) => (current + delta + length) % length);
  const next = () => step(1);
  const previous = () => step(-1);

  return { index, next, previous, goTo: setIndex };
};

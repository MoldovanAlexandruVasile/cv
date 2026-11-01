import { useState } from "react";

// One selected skill highlights every role and project that uses it.
export const useSkillFilter = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const toggle = (skill: string) =>
    setSelected((current) => (current === skill ? null : skill));

  return { selected, toggle };
};

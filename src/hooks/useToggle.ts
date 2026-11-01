import { useCallback, useState } from "react";

export const useToggle = (initial = false) => {
  const [on, setOn] = useState(initial);

  const toggle = useCallback(() => setOn((value) => !value), []);
  const close = useCallback(() => setOn(false), []);

  return { on, toggle, close };
};

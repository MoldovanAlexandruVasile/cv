import { useState } from "react";

// Keeps at most one item open; toggling the open item closes it.
export const useAccordion = (initialId: string | null = null) => {
  const [openId, setOpenId] = useState(initialId);

  const isOpen = (id: string) => openId === id;
  const toggle = (id: string) => setOpenId((current) => (current === id ? null : id));

  return { isOpen, toggle };
};

import { useEffect, useState } from "react";
import { copyToClipboard } from "../utils/clipboard.ts";

const FEEDBACK_MS = 2000;

// Copies text and reports `copied` for a short moment afterwards.
export const useCopyFeedback = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), FEEDBACK_MS);
    return () => clearTimeout(timer);
  }, [copied]);

  const copy = async (text: string) => {
    await copyToClipboard(text);
    setCopied(true);
  };

  return [copied, copy] as const;
};

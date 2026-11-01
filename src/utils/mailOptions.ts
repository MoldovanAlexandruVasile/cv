import type { MailOption } from "../types/mail.ts";

// A bare mailto: link does nothing on machines without a desktop mail app
// (common on Windows), so webmail compose links come first.
export const buildMailOptions = (email: string): MailOption[] => {
  const to = encodeURIComponent(email);
  return [
    { label: "Gmail", href: `https://mail.google.com/mail/?view=cm&fs=1&to=${to}` },
    { label: "Outlook", href: `https://outlook.live.com/mail/0/deeplink/compose?to=${to}` },
    { label: "Email app", href: `mailto:${email}` },
  ];
};

export const isMailto = (href: string) => href.startsWith("mailto:");

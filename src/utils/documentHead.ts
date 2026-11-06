// Small setters for <head> tags the app keeps in step with the language.

export const setMetaContent = (selector: string, content: string) =>
  document.head.querySelector(selector)?.setAttribute("content", content);

export const setLinkHref = (selector: string, href: string) =>
  document.head.querySelector(selector)?.setAttribute("href", href);

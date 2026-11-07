import { renderToString } from "react-dom/server";
import App from "./App.tsx";
import i18n from "./i18n/config.ts";

// The page's HTML in English, written into dist/index.html by
// scripts/prerender.mjs. Search engines and link previews read it without
// running JavaScript; in the browser, React then renders the page again in
// the visitor's language.
export const render = async () => {
  await i18n.changeLanguage("en");
  return renderToString(<App />);
};

// After `vite build`: renders the page to HTML (src/entry-server.tsx) and
// writes it into dist/index.html, so search engines and link previews see the
// full CV without running JavaScript.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build } from "vite";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrOut = path.join(root, "dist-ssr");

// 1. A Node build of the page.
await build({
  root,
  logLevel: "warn",
  // Bundled in, not loaded by Node: its dist imports files without ".js",
  // which bundlers accept and Node's ESM loader doesn't.
  ssr: { noExternal: ["@moldovanalexandruvasile/unity-marketing"] },
  build: {
    ssr: "src/entry-server.tsx",
    outDir: ssrOut,
    emptyOutDir: true,
    rollupOptions: { input: "src/entry-server.tsx" },
  },
});
const { render } = await import(pathToFileURL(path.join(ssrOut, "entry-server.js")).href);

// 2. Its HTML into the built page.
const EMPTY_ROOT = '<div id="root"></div>';
const target = path.join(dist, "index.html");
const html = fs.readFileSync(target, "utf8");
if (!html.includes(EMPTY_ROOT)) throw new Error("index.html: no empty #root to fill");
fs.writeFileSync(target, html.replace(EMPTY_ROOT, `<div id="root">${await render()}</div>`));
fs.rmSync(ssrOut, { recursive: true, force: true });
console.log("prerendered index.html");

# Alexandru-Vasile Moldovan · CV

Interactive CV site. React + TypeScript + Vite, hosted on Netlify.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
```

## Edit the content

The page is in English and Romanian (react-i18next). The visitor's browser
language picks the default; the header dropdown switches and remembers it.

- **Words** live in `src/i18n/locales/{en,ro}/`: `ui.ts` for interface text,
  `content.ts` for the CV itself (roles, projects, summary…), keyed by id.
- **Structure** lives in `src/data/`: ids, companies, dates (`YYYY-MM`), tags,
  links and images.

The header numbers update on their own: years of experience count from
`CAREER_START` in `src/constants/career.ts` (in the visitor's browser, so no
redeploy is needed), and the roles and projects counts come from `src/data/`.

To add a role or project, add it to `src/data/` and add its text under the same
id in both `content.ts` files. English is the reference: `tsc` fails if a `t()`
key or a Romanian UI key is missing.

The Tivren screenshots in `public/media` (Romanian ones in `public/media/ro`) come from the `tivren-website` repo.

## SEO

`build/seo.ts` runs at build time with the published address (`SITE_URL` if set,
otherwise `https://moldovanalexandru.netlify.app/`). It fills in
the canonical URL and link-preview tags in `index.html`, adds schema.org
`Person` data built from `src/data`, and writes `robots.txt` and `sitemap.xml`.

- English is the plain URL, Romanian is `?lang=ro`; both are in the sitemap and
  linked to each other with `hreflang`. The app keeps `<html lang>`, the
  canonical URL, descriptions and the address bar in the current language.
- `public/og-image.png` (1200×630) is the image shown when the link is shared.
- The site is at its domain's root, so crawlers read `robots.txt` and find the
  sitemap from it. Submitting the sitemap in Google Search Console speeds that up.

## Code layout

| Folder                | What lives there                                            |
| --------------------- | ----------------------------------------------------------- |
| `src/components/*`    | One component per file, grouped by page section             |
| `src/components/common` | Shared building blocks (section, tags, buttons)           |
| `src/hooks`           | Custom hooks: theme, language, carousel, dismiss…          |
| `src/utils`           | Pure helpers: class names, clipboard, mail links, scroll…   |
| `src/constants`       | Nav links, project filters, header stats, layout offsets    |
| `src/types`           | Shared TypeScript types                                     |
| `src/i18n`            | i18next setup and the English / Romanian translations       |

## Deploy

Hosted on Netlify at https://moldovanalexandru.netlify.app. Pushing to `main` builds and publishes the
site (settings in `netlify.toml`). One-time setup in Netlify: import this repo,
and under Site configuration → Environment variables add `NODE_AUTH_TOKEN` (a
GitHub token with `read:packages`, marked secret, Builds scope) so npm can
install `@moldovanalexandruvasile/unity-marketing` from GitHub Packages.

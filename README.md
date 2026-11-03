# Alexandru-Vasile Moldovan · CV

Interactive CV site. React + TypeScript + Vite, deployed to GitHub Pages.

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

To add a role or project, add it to `src/data/` and add its text under the same
id in both `content.ts` files. English is the reference: `tsc` fails if a `t()`
key or a Romanian UI key is missing.

The Tivren screenshots in `public/media` (Romanian ones in `public/media/ro`) come from the `tivren-website` repo.

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

Pushing to `main` builds and publishes the site
(`.github/workflows/deploy.yml`). One-time setup on GitHub: Settings → Pages →
Source: **GitHub Actions**.

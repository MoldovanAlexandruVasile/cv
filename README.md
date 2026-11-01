# Alexandru-Vasile Moldovan · CV

Interactive CV site. React + TypeScript + Vite, deployed to GitHub Pages.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
```

## Edit the content

Everything shown on the page lives in `src/data/`, one file per topic:
`profile.ts`, `jobs.ts`, `projects.ts`, `skills.ts`, `education.ts` and
`certifications.ts`. The Shiftify screenshots in `public/media` come from the
`shiftify-website` repo.

## Code layout

| Folder                | What lives there                                            |
| --------------------- | ----------------------------------------------------------- |
| `src/components/*`    | One component per file, grouped by page section             |
| `src/components/common` | Shared building blocks (section, tags, buttons)           |
| `src/hooks`           | Custom hooks: theme, active section, carousel, dismiss…     |
| `src/utils`           | Pure helpers: class names, clipboard, mail links, scroll…   |
| `src/constants`       | Nav links, project filters, header stats, layout offsets    |
| `src/types`           | Shared TypeScript types                                     |

## Deploy

Pushing to `main` builds and publishes the site
(`.github/workflows/deploy.yml`). One-time setup on GitHub: Settings → Pages →
Source: **GitHub Actions**.

# Alexandru-Vasile Moldovan · CV

Interactive CV site. React + TypeScript + Vite, deployed to GitHub Pages.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
```

## Edit the content

Everything shown on the page (profile, roles, projects, skills, education)
lives in `src/data/cv.ts`. The Shiftify screenshots in `public/media` come
from the `shiftify-website` repo.

## Deploy

Pushing to `main` builds and publishes the site
(`.github/workflows/deploy.yml`). One-time setup on GitHub: Settings → Pages →
Source: **GitHub Actions**.

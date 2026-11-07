import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { resolveSiteUrl, seo } from './build/seo.ts'

const siteUrl = resolveSiteUrl()

// Relative base so the build works at the domain root or under any sub-path.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss(), seo(siteUrl)],
  // The app keeps the canonical URL in step with the chosen language.
  define: { __SITE_URL__: JSON.stringify(siteUrl) },
  // One React, even when unity-marketing is linked locally (npm install ../unity-marketing).
  resolve: { dedupe: ['react', 'react-dom'] },
})

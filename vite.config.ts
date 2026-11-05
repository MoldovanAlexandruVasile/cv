import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Relative base so the build works on GitHub Pages at the root or under /<repo>/.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  // One React, even when unity-marketing is linked locally (npm install ../unity-marketing).
  resolve: { dedupe: ['react', 'react-dom'] },
})

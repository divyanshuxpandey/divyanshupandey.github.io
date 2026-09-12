import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Relative (not '/'): this site is deployed as a GitHub Pages *project*
  // page under /divyanshupandey.github.io/, not at the domain root, since
  // the repo name doesn't match the owner's username exactly.
  base: './',
  build: {
    outDir: 'build',
  },
});

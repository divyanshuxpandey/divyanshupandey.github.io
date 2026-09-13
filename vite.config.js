import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Relative (not '/'): this site is deployed as a GitHub Pages *project*
  // page under /divyanshupandey.github.io/, not at the domain root, since
  // the repo name doesn't match the owner's username exactly.
  base: './',
  build: {
    outDir: 'build',
    rollupOptions: {
      // Multi-page build: the dashboard is a separate entry so it ships as
      // its own page at /dashboard/, not bundled into the main site's JS.
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        dashboard: fileURLToPath(new URL('./dashboard/index.html', import.meta.url)),
      },
    },
  },
});

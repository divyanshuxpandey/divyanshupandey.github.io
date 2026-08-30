// Copies the production build into the repo root so GitHub Pages
// (which serves the `main` branch root for a user site) picks it up.
// Run via `npm run deploy` after `npm run build`.
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const buildDir = path.join(root, 'build');

if (!fs.existsSync(buildDir)) {
  console.error('build/ not found — run "npm run build" first.');
  process.exit(1);
}

function rmrf(target) {
  if (fs.existsSync(target)) {
    fs.rmSync(target, { recursive: true, force: true });
  }
}

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src)) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Clear the previous deployed static bundle so stale hashed files don't pile up.
rmrf(path.join(root, 'static'));

for (const entry of fs.readdirSync(buildDir)) {
  const src = path.join(buildDir, entry);
  const dest = path.join(root, entry);
  rmrf(dest);
  copyRecursive(src, dest);
}

// GitHub Pages must not run this through Jekyll.
fs.writeFileSync(path.join(root, '.nojekyll'), '');

console.log('Deployed build/ output to repo root.');

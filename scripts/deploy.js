// Copies the production build into the repo root, so GitHub Pages can
// serve it whether this repo's Pages source is set to "Deploy from a
// branch" (serves repo root files directly, no build step) or "GitHub
// Actions" (the workflow rebuilds fresh from src/ anyway). We can't see
// the Pages source setting from here, so this keeps both paths working.
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

// GitHub Pages must not run this through Jekyll (which ignores files/dirs
// starting with an underscore and can otherwise mangle the build output).
fs.writeFileSync(path.join(root, '.nojekyll'), '');

console.log('Deployed build/ output to repo root.');

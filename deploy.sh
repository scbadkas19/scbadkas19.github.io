#!/usr/bin/env bash
set -euo pipefail

# ---- CONFIG ----
PAGES_REPO_SSH="git@github.com:scbadkas19/scbadkas19.github.io.git"  # or use HTTPS
BUILD_DIR="dist"   # For Vite/Astro/Hugo. For Next.js export use 'out'
CNAME=""           # e.g. "saurabh.dev" (leave empty for github.io default)

echo "→ Installing deps & building…"
npm ci || npm install
npm run build

# SPA fallback so client routes work on GitHub Pages
if [ -f "$BUILD_DIR/index.html" ]; then
  cp "$BUILD_DIR/index.html" "$BUILD_DIR/404.html" || true
fi

WORKDIR=$(mktemp -d)
echo "→ Cloning Pages repo into $WORKDIR"
git clone "$PAGES_REPO_SSH" "$WORKDIR"

echo "→ Clearing old files"
cd "$WORKDIR"
git rm -rf . >/dev/null 2>&1 || true
rm -rf ./* .[^.]* || true

echo "→ Copying new build"
cd - >/dev/null
cp -R "$BUILD_DIR"/. "$WORKDIR"/

if [ -n "$CNAME" ]; then
  echo "$CNAME" > "$WORKDIR/CNAME"
fi

cd "$WORKDIR"
git add .
if git diff --staged --quiet; then
  echo "→ No changes to deploy."
else
  git commit -m "Deploy $(date -u +'%Y-%m-%d %H:%M:%S')"
  git branch -M main
  git push -u origin main
  echo "✅ Deployed to https://scbadkas19.github.io/"
fi

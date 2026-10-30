# Static Pages portfolio — prototype

Adapted from `my-site`, with the server parts removed:

- Removed: Vercel adapter, `output: 'server'`, Turso/drizzle database,
  `src/middleware.ts`, admin pages, and API routes.
- Kept: home, projects, and a Markdown blog — all statically generated.
- Added: `src/content/blog/` content collection, a static projects list
  (`src/data/projects.ts`), and a GitHub Pages deploy workflow
  (`.github/workflows/pages.yml`).

## Run locally

```bash
npm install
npm run dev
```

## Build the static site

```bash
npm run build
# output in dist/
```

## Before pushing to GitHub

Decide the deployment target, because it changes the URL:

- `lgarceau768.github.io` repo → https://lgarceau768.github.io
- `my-site` repo as a project site → https://lgarceau768.github.io/my-site/
  (requires `base: '/my-site/'` in `astro.config.mjs`)

Push target: `lgarceau768.github.io` on its `master` branch (the repo's default).
The live Vercel `my-site` site is untouched by this prototype.

import { defineConfig } from 'astro/config';

// Static output only — no server adapter, no database, no middleware.
// This is the key change from my-site, which used:
//   output: 'server', adapter: vercel(), Turso/drizzle, and admin API routes.
//
// Deploy target: GitHub Pages.
// - If this lives in lgarceau768.github.io, site is https://lgarceau768.github.io and base is '/'
// - If this lives in my-site as a project site, change base to '/my-site/'
export default defineConfig({
  site: 'https://lgarceau768.github.io',
  output: 'static',
});

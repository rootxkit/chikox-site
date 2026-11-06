# chikox-site

The informational website of chikox, served at https://chikox.net. Static,
bilingual: Georgian (`ka`, default) at `/`, English at `/en/`.

Built with [Astro](https://astro.build) as plain static HTML and CSS. No
client-side JavaScript, no cookies, no analytics, no third-party requests:
fonts are self-hosted from `@fontsource`.

## Local development

Requires Node 22 (22.12 or later; see `.nvmrc`).

```
npm ci            # install exactly what package-lock.json pins
npm run dev       # dev server on http://localhost:4321
npm run check     # astro check (TypeScript and templates)
npm run build     # static output in dist/
npm run preview   # serve dist/ on http://localhost:4321
npm run linkcheck # internal link and #fragment check of dist/
npm run verify    # check, build, link check and forbidden-string check
```

## Where things are

| Path | What |
|---|---|
| `src/i18n/ka.ts`, `src/i18n/en.ts` | **All display text**, one dictionary per locale, both typed by `src/i18n/types.ts`. Templates hold no display strings; a missing key is a type error. |
| `src/i18n/index.ts` | Locales, page slugs, URL helper, header navigation |
| `src/pages/[...path].astro` | Generates every page in both locales |
| `src/components/pages/` | One component per page type |
| `src/components/Architecture.astro`, `Pipeline.astro` | Inline SVG diagrams; colours follow the theme |
| `src/data/screenshots.ts` | Console screenshots per page. Empty: nothing is rendered until entries are added (see the comment in the file) |
| `src/pages/404.astro`, `sitemap.xml.ts`, `robots.txt.ts` | 404 page (both languages), sitemap with hreflang alternates, robots |
| `public/_headers` | Security and cache headers, applied by Cloudflare |
| `scripts/check-links.mjs` | Internal link checker used in CI |
| `scripts/check-forbidden.mjs` | Fails CI if the built site contains hostnames, addresses or other text that must not be published |

Content rules: the site describes the platform at the level of principles.
It names no hostnames, addresses, sign-in URLs, configuration names,
customers, countries or agencies, and no repository or GitHub links.
`scripts/check-forbidden.mjs` enforces part of this; review covers the rest.

## Cloudflare Workers

The site is deployed as a Worker with static assets only (no Worker
script): `wrangler.jsonc` points at `dist/`, serves `404.html` for unknown
paths and applies `public/_headers`. Connect this repository under Workers
& Pages, Create, Import a repository, with:

| Setting | Value |
|---|---|
| Production branch | `main` |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Root directory | (empty) |

Node comes from `.nvmrc`.

### Custom domain

1. In the Worker: Settings, Domains & Routes, Add, Custom domain, enter
   `chikox.net`. With the zone on Cloudflare, the DNS record is created
   for you; an existing record on that name must be removed first.
2. Repeat for `www.chikox.net`, then add a redirect rule (Rules, Redirect
   Rules) from `www.chikox.net/*` to `https://chikox.net/${1}`, status 301,
   so there is one canonical host.
3. SSL/TLS: Full (strict); enable Always Use HTTPS.
4. Check: `https://chikox.net/`, `https://chikox.net/en/`,
   `https://chikox.net/sitemap.xml`, and an unknown path answering 404.

The canonical URLs, sitemap and Open Graph tags use `https://chikox.net`
(`site` in `astro.config.mjs`).

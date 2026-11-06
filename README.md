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
| `public/_headers` | Security and cache headers, applied by Cloudflare Pages |
| `scripts/check-links.mjs` | Internal link checker used in CI |
| `scripts/check-forbidden.mjs` | Fails CI if the built site contains hostnames, addresses or other text that must not be published |

Content rules: the site describes the platform at the level of principles.
It names no hostnames, addresses, sign-in URLs, configuration names,
customers, countries or agencies, and links only to public repositories.
`scripts/check-forbidden.mjs` enforces part of this; review covers the rest.

## Cloudflare Pages

Create a Pages project connected to this repository (Workers & Pages,
Create, Pages, Connect to Git) with:

| Setting | Value |
|---|---|
| Production branch | `main` |
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | (empty) |
| Environment variable | `NODE_VERSION` = `22` (Pages also reads `.nvmrc`) |

`public/_headers` is copied to `dist/` and applied by Pages. `404.html` in
the output makes Pages answer unknown paths with a 404 and that page.

### Custom domain

1. In the Pages project: Custom domains, Set up a custom domain, enter
   `chikox.net`. With the zone on Cloudflare, Pages creates the DNS record
   itself; otherwise add a `CNAME` for the apex (flattened) to
   `<project>.pages.dev` as shown.
2. Repeat for `www.chikox.net`, then add a redirect rule (Rules, Redirect
   Rules) from `www.chikox.net/*` to `https://chikox.net/${1}`, status 301,
   so there is one canonical host.
3. SSL/TLS: Full (strict); enable Always Use HTTPS.
4. Check: `https://chikox.net/`, `https://chikox.net/en/`,
   `https://chikox.net/sitemap.xml`, and an unknown path answering 404.

The canonical URLs, sitemap and Open Graph tags use `https://chikox.net`
(`site` in `astro.config.mjs`).

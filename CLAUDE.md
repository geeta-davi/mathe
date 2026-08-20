# mathe-site — the public marketing + legal site

`https://mathe.games`: an **Astro 7** static site (zero JS by default) that markets the
Mathe player app and hosts the legal pages the Play listing points at. Tailwind CSS v4,
MDX content collections, and Astro's built-in i18n across **en / es / fr / de**.

**It talks to nothing.** No API calls, no auth, no mathe-server dependency — it is
generated at build time and served as files. That is deliberate: this site must stay up
and fast when the API is not.

This file is the canonical entry point for **this repo**. For the wider system (the four
repos, the API contract, deployment topology) start at the workspace router
[`../CLAUDE.md`](../CLAUDE.md) and its [`../knowledge/`](../knowledge/README.md).

## Quickstart

```bash
npm install
npm run dev        # dev server → http://localhost:4321
npm run build      # astro check (typecheck) + astro build → dist/
npm run build:fast # skip astro check — for a quick local look only
npm run preview    # serve the production build locally
```

`npm run build` is the gate: `astro check` is the only automated typecheck here. **There
is no test runner** — verify visually across at least two locales and both themes.

## What must always be true

The Play listing, the Data safety declarations and these legal pages are cross-checked
against each other by Google. A mismatch here is a **store rejection**, not a cosmetic
bug. Three rules follow from that:

1. **Copy describes only what ships: Zip and CatSeek.** There are no duels, no ratings,
   no matchmaking, no leagues, no multiplayer and no mental-arithmetic content — an
   earlier arithmetic build was removed, and its marketing copy has been scrubbed once
   already. Do not reintroduce it, in any language.
2. **No invented numbers.** "250k+ players" and "12M+ duels" were once on this page for
   an app with no production release. Any stat must be one you can point at a source
   for.
3. **`src/consts.ts` is the single source** of brand name, store links, socials and
   contact addresses. `STORE_LINKS.ios` is `null` on purpose — there is no App Store
   listing — and `StoreBadges` renders "coming soon" rather than linking to a 404. The
   Android package is `games.mathe`.

## Layout — where a new file goes

```
src/
  consts.ts                  site URL, store links, socials — ONE source, edit here
  content.config.ts          the MDX "pages" collection schema
  content/pages/<locale>/    long-form legal/about MDX, one folder per locale
  i18n/ui.ts                 UI-string dictionaries for every locale
  i18n/utils.ts              getLangFromUrl, useTranslations, switchLocalePath, localeStaticPaths
  i18n/meta.ts               per-page localized <title>/description
  i18n/faq.ts                support FAQ data per locale
  layouts/BaseLayout.astro   <head>/SEO/header/footer shell
  components/ui/             primitives (Button, Logo, PageHeader, StoreBadges, PuzzleField)
  components/nav/            Header, Footer, LangSwitcher
  components/seo/            Seo.astro, JsonLd.astro
  components/home/           the home-page sections
  components/mock/           phone mockups of the real app screens
  pages/index.astro          "/" → redirect to /en/ (canonical + noindex)
  pages/[locale]/*.astro     every route, generated per locale via localeStaticPaths()
  pages/[locale]/[doc].astro privacy / terms / cookies / about, from MDX (en fallback)
  styles/global.css          Tailwind v4 theme + brand tokens
public/                      favicon, robots.txt, _redirects, og/
```

A new page is **one `.astro` file under `src/pages/[locale]/`** plus its strings in
`i18n/ui.ts` and `i18n/meta.ts` — never a per-locale copy of the file. Long-form prose
goes in `content/pages/<locale>/` as MDX instead, and is served by `[doc].astro`.

## Conventions

- **Propose like a PM + architect, keep docs in lockstep, and never commit or push
  without being told.** → workspace [How to work here](../CLAUDE.md#3-how-to-work-here)
- **Zero client JS unless a feature genuinely needs it.** This site's advantage is that
  it ships almost none. An Astro island must earn itself.
- **Every user-facing string goes through `i18n/`.** A hardcoded English string in a
  component is a bug in four languages at once. MDX docs may fall back to English
  per-page; UI strings may not.
- **SEO is structural, not decorative.** New routes need their `meta.ts` entry, land in
  the sitemap with reciprocal hreflang, and carry a canonical URL. `trailingSlash:
  'always'` + `build.format: 'directory'` must stay aligned with the host.
- **Styling is Tailwind v4 CSS-first** with brand tokens in `src/styles/global.css`.
  Compose the existing `components/ui/` primitives before adding new ones; never
  hand-roll a brand color.

## Adding a language

1. Add the code to `i18n.locales` in `astro.config.mjs` **and** to the sitemap
   `i18n.locales` map.
2. Add it to `languages` + `localeNames` and a new dictionary block in `src/i18n/ui.ts`.
3. Add the locale to each record in `src/i18n/meta.ts` and `src/i18n/faq.ts`.
4. Optionally add translated MDX under `src/content/pages/<locale>/` — missing docs fall
   back to English with a notice.

Every route is generated for every locale via `localeStaticPaths()`, so no per-locale
page files are needed.

## Deployment

Static output, **no adapter**. Build command `npm run build`, output dir `dist/`, served
from Cloudflare. `public/_redirects` sends `/ → /en/` (302); Astro also emits a 0s client
redirect at `/` for hosts that serve `dist/index.html` directly.

## Known placeholders

Real gaps, not cosmetics — check before treating a page as launch-ready:

- **OG image** — `public/og/default.svg` is an on-brand placeholder; a 1200×630 **PNG**
  is what social scrapers want. Update the default in `components/seo/Seo.astro` when it
  lands.
- **Contact form** — `pages/[locale]/contact.astro` posts to a Formspree placeholder.
- **Legal copy** — `content/pages/en/{privacy,terms,cookies}.mdx` are templates that
  have not been professionally reviewed; `es`/`fr`/`de` fall back to English.

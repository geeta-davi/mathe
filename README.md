# mathe.games — marketing site

Fast, SEO-first, multilingual marketing site for **mathe** — a daily mind-games app
(Zip and CatSeek). Built with **Astro** (static output) + **Tailwind CSS v4**.

> Agents: start at [CLAUDE.md](CLAUDE.md), not here.

## Stack

- **Astro 7** (static site generation, zero JS by default)
- **Tailwind CSS v4** (via `@tailwindcss/vite`) — brand tokens in `src/styles/global.css`
- **Astro built-in i18n** — locales `en` (default), `es`, `fr`, `de`; prefix-all URLs (`/en/`, `/es/`, …)
- **Content Collections + MDX** — long-form legal/about pages, one folder per locale
- **@astrojs/sitemap** — localized sitemap with reciprocal hreflang
- **astro-seo** — head meta, canonical, hreflang, Open Graph, Twitter
- Hand-rolled **JSON-LD** (Organization, SoftwareApplication, BreadcrumbList)

## Commands

```bash
npm install
npm run dev        # dev server → http://localhost:4321
npm run build      # astro check + astro build → dist/
npm run preview    # serve the production build locally
```

## Structure

```
src/
  consts.ts                # site URL, store links, socials, stats (edit placeholders here)
  content.config.ts        # MDX "pages" collection (privacy/terms/cookies/about)
  content/pages/<locale>/  # MDX content per locale
  i18n/ui.ts               # UI-string dictionaries (all locales)
  i18n/utils.ts            # getLangFromUrl, useTranslations, switchLocalePath, localeStaticPaths
  i18n/meta.ts             # per-page localized <title>/description
  i18n/faq.ts              # support FAQ data per locale
  layouts/BaseLayout.astro # <head>/SEO/header/footer shell
  components/               # ui/, seo/, nav/, mock/ (phone mockups), home/ (sections)
  pages/
    index.astro            # "/" → 0s redirect to /en/ (canonical + noindex)
    [locale]/index.astro   # home
    [locale]/features.astro, how-it-works.astro, download.astro, support.astro, contact.astro
    [locale]/[doc].astro   # privacy / terms / cookies / about (from MDX, en fallback)
    404.astro
public/                    # favicon.svg, robots.txt, _redirects, og/
```

## Adding a language

1. Add the code to `i18n.locales` in `astro.config.mjs` and to the sitemap `i18n.locales` map.
2. Add it to `languages` + `localeNames` and a new dictionary block in `src/i18n/ui.ts`.
3. Add the locale to each record in `src/i18n/meta.ts` and `src/i18n/faq.ts`.
4. Optionally add translated MDX under `src/content/pages/<locale>/` (missing docs fall back to English).

Every route is generated for every locale via `localeStaticPaths()`, so no per-locale page files are needed.

## Deployment (Cloudflare Pages / Netlify)

- **Static output — no adapter needed.** Build command `npm run build`, output dir `dist`.
- `public/_redirects` sends `/ → /en/` (302). Astro also emits a 0s client redirect at `/` for
  local preview and hosts that serve `dist/index.html` directly.
- Keep `trailingSlash: 'always'` + `build.format: 'directory'` aligned with the host.

## Placeholders to replace before launch

- **Store URLs, socials, contact emails, marketing stats** — `src/consts.ts`.
- **OG image** — `public/og/default.svg` is an on-brand placeholder. Replace with a **1200×630 PNG**
  (`default.png`) for maximum social-scraper compatibility, then update the default in
  `src/components/seo/Seo.astro`.
- **Contact form endpoint** — `src/pages/[locale]/contact.astro` posts to a Formspree placeholder;
  point it at a real handler (Formspree / Cloudflare Pages Function / Netlify Forms).
- **Legal copy** — `src/content/pages/en/{privacy,terms,cookies}.mdx` are templates; have them
  reviewed by a professional, and add `es`/`fr`/`de` translations when ready (they currently fall
  back to English with a notice).
- **Phone-mockup text** (`src/components/mock/`) is illustrative English app UI; localize if desired.

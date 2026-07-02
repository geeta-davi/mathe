// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Central site + locale config. `SITE` is also imported by src/consts.ts.
const SITE = 'https://mathe.games';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  build: { format: 'directory' },

  // Prefix-all i18n: /en/ /es/ /fr/ /de/ — uniform, easy to extend.
  i18n: {
    locales: ['en', 'es', 'fr', 'de'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true,
      // We own the "/" route via src/pages/index.astro (0s redirect to /en/,
      // noindex + canonical). Letting Astro auto-generate it adds a 2s delay
      // and conflicts with our page — so keep this false.
      redirectToDefaultLocale: false,
    },
    // Note: every route is generated for every locale via getStaticPaths, and
    // MDX content pages fall back to English per-page — so Astro's i18n
    // `fallback` is unnecessary here (and would double-generate routes).
  },

  integrations: [
    mdx(),
    sitemap({
      // Exclude the bare "/" redirect (so the default locale isn't listed
      // twice as both "/" and "/en/") and the 404 page.
      filter: (page) => page !== `${SITE}/` && !page.endsWith("/404/"),
      i18n: {
        defaultLocale: 'en',
        // key = URL path segment, value = hreflang attribute
        locales: { en: 'en', es: 'es', fr: 'fr', de: 'de' },
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});

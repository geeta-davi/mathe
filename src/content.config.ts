import { defineCollection } from "astro:content";
import { z } from "zod";
import { glob } from "astro/loaders";

/**
 * Long-form content pages (privacy, terms, cookies, about) as MDX, one folder
 * per locale. Entry ids look like "en/privacy" — locale is the first segment.
 */
const pages = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    updated: z.string().optional(),
  }),
});

export const collections = { pages };

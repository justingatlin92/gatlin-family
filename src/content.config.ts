import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const studies = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/studies' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    author: z.string().default('Justin Gatlin'),
    tags: z.array(z.string()).default([]),
    youtube: z.string().optional(),
  }),
});

export const collections = { studies };

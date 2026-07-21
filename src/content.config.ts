import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      medium: z.string(),
      date: z.string().optional(),
      order: z.number(),
      hero: image(),
      heroPosition: z.string().default('center'),
      gallery: z.array(image()).default([]),
      audio: z.string().optional(),
      audioLabel: z.string().optional(),
    }),
});

export const collections = { work };

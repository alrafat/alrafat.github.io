import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Projects: add a new .md file in src/content/projects/ (copy _template.md).
// Files whose name starts with "_" are ignored.
const projects = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!**/_*.md'], base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.enum(['Live', 'Ongoing', 'Concept', 'Archived']),
    category: z.string(), // e.g. Web app, Mobile app, Design, Photography
    tags: z.array(z.string()).default([]),
    url: z.string().optional(),
    repo: z.string().optional(),
    image: z.string().optional(), // path in /public, e.g. /images/projects/x.png
    year: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(100),
  }),
});

export const collections = { projects };

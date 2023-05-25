import { z, defineCollection } from 'astro:content';

const notesCollection = defineCollection({
	schema: z.object({
		banner: z.object({
			alt: z.string(),
			url: z.string().url(),
		}),
		category: z.string().optional(),
		date: z.date().transform((str) => new Date(str)),
		description: z.string(),
		draft: z.boolean().default(false),
		title: z.string(),
	}),
	type: 'content',
});

export const collections = {
	notes: notesCollection,
};

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

const eventsCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		date: z
			.string()
			.datetime()
			.transform((str) => new Date(str)),
		icon: z.string(),
		link: z
			.object({
				text: z.string(),
				url: z.string(),
			})
			.optional(),
	}),
	type: 'data',
});

export const collections = {
	notes: notesCollection,
	events: eventsCollection,
};

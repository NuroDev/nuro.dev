import { z, defineCollection } from 'astro:content';

export const NoteSchema = z.object({
	banner: z.object({
		alt: z.string(),
		url: z.string().url(),
	}),
	category: z.string().optional(),
	date: z.date().transform((str) => new Date(str)),
	description: z.string(),
	draft: z.boolean().default(false),
	title: z.string(),
});

const notesCollection = defineCollection({
	schema: NoteSchema,
	type: 'content',
});

export const EventSchema = z.object({
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
});

const eventsCollection = defineCollection({
	schema: EventSchema,
	type: 'data',
});

export const collections = {
	notes: notesCollection,
	events: eventsCollection,
};

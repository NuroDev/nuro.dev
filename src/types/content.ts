import type { z } from 'zod';
import type { EventSchema, NoteSchema } from '~/content/config';

export type Event = z.infer<typeof EventSchema>;

export type Note = z.infer<typeof NoteSchema>;

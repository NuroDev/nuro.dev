import { format } from 'date-fns';

import type { Post } from '~/types';

export function deserialisePost(post: string | Post): Post {
	const input = (typeof post === 'string' ? JSON.parse(post) : post) as Post;
	const date = new Date(input.date.value);

	return {
		...input,
		date: {
			...input.date,
			value: date,
			readable: format(date, 'PPP'),
		},
	};
}

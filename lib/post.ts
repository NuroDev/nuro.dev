import { format } from 'date-fns';

import type { FrontMatter } from '~/types';

export function deserialiseFrontmatter(post: string | FrontMatter): FrontMatter {
	const input = (typeof post === 'string' ? JSON.parse(post) : post) as FrontMatter;
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

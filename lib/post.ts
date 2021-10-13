import type { DeserialisedPost, SerialisedPost } from '~/types';

export function deserialisePost(post: SerialisedPost): DeserialisedPost {
	const date = new Date(post.date.raw);

	return {
		...post,
		date: {
			...post.date,
			value: date,
		},
	};
}

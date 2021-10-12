import { Layout } from '~/layouts';
import { getPosts } from '~/lib/usePost';

import type { GetStaticPropsResult } from 'next';

import type { Posts } from '~/types';
import { format } from 'date-fns';

interface BlogProps {
	posts?: Posts;
}

export async function getStaticProps(): Promise<GetStaticPropsResult<BlogProps>> {
	const posts = await getPosts();

	return {
		props: {
			posts,
		},
	};
}

export default function Blog({ posts }: BlogProps) {
	const deserialisedPosts = [...posts].map((post) => {
		const date = new Date(post.date.raw);

		return {
			...post,
			date: {
				raw: date,
				readable: format(date, 'PPP'),
			},
		};
	});

	console.log(deserialisedPosts);

	return (
		<Layout.Blog>
			<pre>{JSON.stringify(deserialisedPosts, null, 4)}</pre>
		</Layout.Blog>
	);
}

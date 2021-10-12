import { Layout } from '~/layouts';

import { getPost, getPostSlugs } from '~/lib/build';

import type { GetStaticPaths, GetStaticPropsContext, GetStaticPropsResult } from 'next';

import type { ParsedUrlQuery } from 'querystring';

import type { SerialisedPost } from '~/types';

interface PathProps extends ParsedUrlQuery {
	slug: string;
}

interface BlogPostProps {
	post?: SerialisedPost;
}

export const getStaticPaths: GetStaticPaths<PathProps> = async () => {
	const posts = await getPostSlugs();

	return {
		paths: posts.map((post) => ({
			params: {
				slug: post.replace(/\.md/, ''),
			},
		})),
		fallback: false,
	};
};

export async function getStaticProps({
	params,
}: GetStaticPropsContext<PathProps>): Promise<GetStaticPropsResult<BlogPostProps>> {
	const post = await getPost(params.slug);

	return {
		props: {
			post: post,
		},
	};
}

export default function BlogPost({ post }: BlogPostProps) {
	return (
		<Layout.Default
			seo={{
				title: `nuro ─ blog ─ ${post.title.raw}`,
				description: post.description.raw ?? undefined,
			}}>
			<pre>{JSON.stringify(post, null, 4)}</pre>
		</Layout.Default>
	);
}

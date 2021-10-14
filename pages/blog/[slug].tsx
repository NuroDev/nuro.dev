import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Layout } from '~/layouts';

import { Blog } from '~/components';
import { deserialisePost } from '~/lib';
import { getPost, getPostSlugs } from '~/lib/build';

import type { GetStaticPaths, GetStaticPropsContext, GetStaticPropsResult } from 'next';

import type { ParsedUrlQuery } from 'querystring';

interface PathProps extends ParsedUrlQuery {
	slug: string;
}

interface BlogPostProps {
	serialisedPost?: string;
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
			serialisedPost: JSON.stringify(post),
		},
	};
}

export default function BlogPost({ serialisedPost }: BlogPostProps) {
	const post = deserialisePost(serialisedPost);

	return (
		<Layout.Default
			back={true}
			background={false}
			seo={{
				title: `nuro ─ blog ─ ${post.title.value}`,
				description: post.description.value ?? undefined,
			}}>
			<pre>{JSON.stringify(post, null, 4)}</pre>
		</Layout.Default>
	);
}

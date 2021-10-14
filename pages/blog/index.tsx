import styled from '@emotion/styled';
import tw from 'twin.macro';

import { Blog } from '~/components';
import { Layout } from '~/layouts';
import { deserialisePost } from '~/lib';
import { getPosts } from '~/lib/build';

import type { GetStaticPropsResult } from 'next';

import type { Posts } from '~/types';

interface BlogProps {
	serialisedPosts?: string;
}

const Container = styled.div(tw`
	mt-24 sm:mt-16 mb-20 mx-4 sm:mx-6 lg:mb-28 lg:mx-8
`);

const Content = styled.div(tw`
	relative max-w-6xl mx-auto
`);

const PostsContainer = styled.p(tw`
	max-w-lg \
		mt-4 lg:mt-12 mx-auto \
		grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:max-w-none
`);

export async function getStaticProps(): Promise<GetStaticPropsResult<BlogProps>> {
	const posts = await getPosts();

	return {
		props: {
			serialisedPosts: JSON.stringify(posts),
		},
	};
}

export default function _Blog({ serialisedPosts }: BlogProps) {
	const deserialisedPosts = JSON.parse(serialisedPosts) as Posts;
	if (deserialisedPosts.length <= 0) return <Blog.Error />;

	const posts = deserialisedPosts.map((post) => deserialisePost(post));
	const latestPost = posts.shift();

	return (
		<Layout.Default seo={{ title: 'nuro ─ blog' }}>
			<Container>
				<Content>
					<Blog.Latest post={latestPost} />
					<PostsContainer>
						{posts.map((post, i) => (
							<Blog.Post key={i} post={post} index={i} />
						))}
					</PostsContainer>
				</Content>
			</Container>
		</Layout.Default>
	);
}

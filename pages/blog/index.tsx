import styled from '@emotion/styled';
import tw from 'twin.macro';

import { Blog } from '~/components';
import { getAllPostsFrontMatter } from '~/lib/post';
import { Layout } from '~/layouts';

import type { GetStaticProps } from 'next';

import type { FrontMatter } from '~/types';

interface BlogProps {
	serialisedFrontmatters: string;
}

const Container = styled.div(tw`
	mt-8 sm:mt-16 mb-20 mx-0 sm:mx-6 lg:mb-28 lg:mx-8
`);

const Content = styled.div(tw`
	relative max-w-6xl mx-auto
`);

const PostsContainer = styled.div(tw`
	mt-4 lg:mt-12 \
	grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:max-w-none
`);

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
	const frontmatters = await getAllPostsFrontMatter();

	return {
		props: {
			serialisedFrontmatters: JSON.stringify(frontmatters),
		},
	};
};

export default function BlogPage({ serialisedFrontmatters }: BlogProps) {
	const frontmatters = JSON.parse(serialisedFrontmatters) as Array<FrontMatter>;

	if (frontmatters.length <= 0) return <Blog.Error routeBlog={false} />;

	const latestPost = frontmatters.shift();

	return (
		<Layout.Default seo={{ title: 'nuro ─ blog' }}>
			<Container>
				<Content>
					<Blog.Latest frontmatter={latestPost} />
					<PostsContainer>
						{frontmatters.map((frontmatter, i) => (
							<Blog.Post key={i} frontmatter={frontmatter} index={i} />
						))}
					</PostsContainer>
				</Content>
			</Container>
		</Layout.Default>
	);
}

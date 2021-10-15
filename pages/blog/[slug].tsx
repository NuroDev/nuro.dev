import Image from 'next/image';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { MDXRemote } from 'next-mdx-remote';

import { Blog } from '~/components';
import { getPost, getAllPostSlugs } from '~/lib/post';
import { Layout } from '~/layouts';

import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import type { ParsedUrlQuery } from 'querystring';
import type { Post } from '~/types';

interface PathProps extends ParsedUrlQuery {
	slug: string;
}

interface BlogPostProps {
	post: Post;
}

export const getStaticPaths: GetStaticPaths<PathProps> = async () => {
	const posts = await getAllPostSlugs();

	return {
		paths: posts.map((post) => ({
			params: {
				slug: post.replace(/\.md/, ''),
			},
		})),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({
	params,
}: GetStaticPropsContext<PathProps>) => {
	const { frontmatter, source } = await getPost(params.slug);

	return {
		props: {
			post: {
				frontmatter,
				source,
			},
		},
	};
};

const Container = styled.div(tw`
	relative \
	px-4 py-16 \
	overflow-hidden
`);

const Content = styled.div(tw`
	relative \
	px-4 sm:px-6 lg:px-8
`);

const Banner = styled.div`
	${tw`
		relative sm:max-w-2xl lg:sm:max-w-6xl \
		mx-auto my-2 sm:my-4
	`}

	img {
		${tw`
			absolute top-0 left-0 w-full h-auto max-h-64 lg:max-h-96 \
			mb-8 \
			rounded-3xl object-cover select-none shadow-xl \
			transition ease-in-out duration-300
		`}
	}
`;

const BannerPlaceholder = styled.div(tw`
	w-full h-full h-64 lg:h-96 \
	mb-8 \
	bg-gray-200 dark:bg-gray-600 \
	rounded-3xl \
	motion-safe:animate-pulse
`);

const Meta = styled.div(tw`
	mx-auto \
	text-lg max-w-prose
`);

const TitlePrefix = styled.span(tw`
	block \
	text-primary-600 
	font-semibold tracking-wide uppercase text-base text-center
`);

const Title = styled.span(tw`
	block \
	mt-2 \
	text-gray-900 dark:text-white \
	sm:text-4xl text-3xl text-center leading-8 font-extrabold tracking-tight
`);

const Date = styled.span(tw`
	flex justify-center items-center \
	mt-4
`);

const Description = styled.p(tw`
	mt-8 \
	text-xl text-gray-400 leading-8
`);

export default function BlogPost({ post }: BlogPostProps) {
	return (
		<Layout.Default
			back={true}
			background={false}
			seo={{
				title: `nuro ─ blog ─ ${post.frontmatter.title}`,
				description: post.frontmatter.description ?? undefined,
			}}>
			<Container>
				<Content>
					{post.frontmatter.banner && (post.frontmatter.banner_show ?? true) && (
						<Banner>
							<BannerPlaceholder />
							<Image
								src={post.frontmatter.banner}
								alt={post.frontmatter.banner_alt ?? post.frontmatter.title}
								draggable={false}
							/>
						</Banner>
					)}

					<Meta>
						<h1>
							{post.frontmatter.title_prefix && (
								<TitlePrefix>{post.frontmatter.title_prefix}</TitlePrefix>
							)}
							<Title>{post.frontmatter.title}</Title>
						</h1>

						<Date>
							<Blog.Date>{post.frontmatter.date}</Blog.Date>
						</Date>

						{post.frontmatter.description && post.frontmatter.description_show && (
							<Description>{post.frontmatter.description}</Description>
						)}
					</Meta>

					<MDXRemote {...post.source} components={Blog.X} />
				</Content>
			</Container>
		</Layout.Default>
	);
}

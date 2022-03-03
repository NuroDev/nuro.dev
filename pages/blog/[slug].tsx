import Image from 'next/image';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { MDXRemote } from 'next-mdx-remote';

import { Blog, Pill } from '~/components';
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

const Article = styled.article`
	${tw`
		max-w-prose \
		mx-auto \
		prose prose-primary prose-lg text-gray-500 mx-auto
	`}

	${Blog.CodeStyles}
	${Blog.ElementStyles}
`;

const Meta = styled.div(tw`
	flex flex-col space-y-4 max-w-prose \
	mx-auto my-4
	text-lg text-center
`);

const TitlePrefix = styled.span(tw`
	block \
	text-primary-600 
	font-semibold tracking-wide uppercase text-base text-center
`);

const Title = styled.span(tw`
	text-gray-900 dark:text-white \
	sm:text-4xl text-3xl text-center leading-8 font-extrabold tracking-tight
`);

const DateContainer = styled.span(tw`
	flex justify-center items-center
`);

const Description = styled.p(tw`
	mt-8 \
	text-xl text-gray-400 leading-8
`);

export default function BlogPost({ post }: BlogPostProps) {
	return (
		<Layout.Blog
			seo={{
				title: `nuro ─ blog ─ ${post.frontmatter.title}`,
				description: post.frontmatter.description ?? undefined,
				openGraph: {
					title: post.frontmatter.title,
					images: [
						{
							url: post.frontmatter.banner ?? '/banner.png',
							alt: post.frontmatter.description,
							width: 1280,
							height: 720,
						},
					],
				},
			}}
		>
			<Container>
				<Content>
					{post.frontmatter.banner && (post.frontmatter.banner_show ?? true) && (
						<Banner>
							<BannerPlaceholder />
							<Image
								alt={post.frontmatter.banner_alt ?? post.frontmatter.title}
								draggable={false}
								layout="fill"
								src={post.frontmatter.banner}
							/>
						</Banner>
					)}

					<Meta as="div">
						<div>
							{post.frontmatter.title_prefix && (
								<TitlePrefix>{post.frontmatter.title_prefix}</TitlePrefix>
							)}
							<Title>{post.frontmatter.title}</Title>
						</div>

						<DateContainer>
							<Pill.Date>{post.frontmatter.date}</Pill.Date>
						</DateContainer>

						{post.frontmatter.description && post.frontmatter.description_show && (
							<Description>{post.frontmatter.description}</Description>
						)}
					</Meta>

					<Article>
						<MDXRemote {...post.source} components={Blog.X} />
					</Article>
				</Content>
			</Container>
		</Layout.Blog>
	);
}

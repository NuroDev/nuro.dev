import Link from 'next/link';
import styled from '@emotion/styled';
import tw from 'twin.macro';

import { Blog } from '..';

import type { DeserialisedPost } from '~/types';

interface LatestProps {
	post: DeserialisedPost;
}

const Container = styled.a(tw`
	flex flex-col lg:flex-row \
	mt-12 \
	bg-transparent \
	rounded-2xl hover:shadow-xl cursor-pointer \
	border-2 border-gray-100 dark:border-gray-500 \
	transform hover:-translate-y-1 \
	transition ease-in-out duration-300 \
	focus:outline-none focus:ring-4 focus:ring-offset-8 focus:ring-primary-500
`);

const Banner = styled.div`
	${tw`
		relative flex justify-center my-auto \
		w-full xl:w-2/4 lg:max-w-xl h-64 sm:h-72 lg:h-96 \
		overflow-hidden rounded-2xl rounded-bl-none lg:rounded-bl-2xl rounded-br-none lg:rounded-br-2xl lg:rounded-tr-none lg:rounded-br-none \
		transition ease-in-out duration-300
	`}

	img {
		${tw`
			absolute top-0 left-0 w-full h-full \
			rounded-lg rounded-bl-none lg:rounded-bl-lg rounded-br-none lg:rounded-br-lg lg:rounded-tr-none lg:rounded-br-none \
			object-cover select-none
		`}
	}
`;

const BannerPlaceholder = styled.div(tw`
	w-full h-full mb-8 \
	bg-gray-200 dark:bg-gray-600 \
	rounded-lg rounded-bl-none lg:rounded-bl-lg rounded-br-none lg:rounded-br-lg lg:rounded-tr-none lg:rounded-br-none
	animate-pulse
`);

const Content = styled.div(tw`
	flex flex-col flex-1 justify-evenly \
	m-auto sm:m-0 pb-3 sm:p-1 sm:pt-0 lg:px-12 \
	text-gray-300 dark:text-gray-400
`);

const Title = styled.h2(tw`
	mt-6 lg:mt-0 mx-4 lg:mx-0 \
	text-3xl sm:text-4xl lg:text-5xl font-bold line-clamp-4 \
	text-gray-500 dark:text-white
`);

const Description = styled.p(tw`
	mt-6 lg:mt-0 mx-4 lg:mx-0 \
	text-lg
`);

const Footer = styled.div(tw`
	flex items-center \
	mt-6 lg:mt-0 mx-4 lg:mx-0 pb-4 lg:pb-0
`);

export function Latest({ post }: LatestProps) {
	return (
		<Link aria-label={`Read blog post: ${post.title.raw}`} href={post.url}>
			<Container>
				{post.banner.show && (
					<Banner>
						<BannerPlaceholder />

						{Array.isArray(post.banner.url) ? (
							<picture>
								{post.banner.url.reverse().map((src, i) => (
									<img
										alt={post.banner.alt ?? post.title.raw}
										draggable={false}
										key={i}
										src={src}
									/>
								))}
							</picture>
						) : (
							<img
								alt={post.banner.alt ?? post.title.raw}
								draggable={false}
								src={post.banner.url}
							/>
						)}
					</Banner>
				)}
				<Content>
					<Title>{post.title.raw || post.title}</Title>
					{((post.description && post.description.show) || true) && (
						<Description>{post.description.raw || post.description}</Description>
					)}
					<Footer>
						<Blog.Date date={post.date.value ?? new Date(post.date.raw)} />
					</Footer>
				</Content>
			</Container>
		</Link>
	);
}

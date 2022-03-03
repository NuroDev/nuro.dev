import Image from 'next/image';
import Link from 'next/link';
import styled from '@emotion/styled';
import tw from 'twin.macro';

import { Pill } from '~/components';

import type { FrontMatter } from '~/types';

interface PostProps {
	index: number;
	frontmatter: FrontMatter;
}

const Container = styled.a(tw`
	flex flex-col \
	bg-white bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 \
	backdrop-filter backdrop-blur-sm \
	border-2 border-gray-100 dark:border-gray-500 \
	rounded-2xl overflow-hidden hover:shadow-xl cursor-pointer \
	transform motion-safe:hover:-translate-y-1 \
	transition ease-in-out duration-300 \
	focus:outline-none focus:ring-4 focus:ring-offset-8 focus:ring-primary-500
`);

const Banner = styled.div`
	${tw`
		relative flex justify-center w-full max-w-xl \
		my-auto \
		rounded-t-lg overflow-hidden
	`}

	img {
		${tw`
			absolute top-0 left-0 w-full h-48 \
			object-cover select-none
		`}
	}
`;

const BannerPlaceholder = styled.div(tw`
	w-full h-full lg:h-48 \
	bg-gray-200 dark:bg-gray-600
	motion-safe:animate-pulse
`);

const Content = styled.div<{ banner: boolean }>`
	${tw`
		flex-1 flex flex-col justify-between \
		p-6 \
		bg-transparent \
		rounded-2xl \
		bg-transparent
	`}

	${({ banner }) => banner && tw`lg:rounded-tr-none lg:rounded-tl-none`}
`;

const ContextText = styled.div(tw`
	flex flex-col flex-1 justify-around \
	rounded-lg \
	text-gray-300 dark:text-gray-400 \
	focus:outline-none focus:ring-4 focus:border-none focus:ring-primary-500
`);

const Title = styled.p(tw`
	text-xl font-bold \
	text-gray-900 dark:text-gray-100
`);

const Description = styled.p(tw`
	mt-3 \
	text-base line-clamp-2
`);

const Footer = styled.div(tw`
	flex items-start space-x-1 \
	mt-4 \
	text-sm
`);

export function _Post({ index, frontmatter }: PostProps) {
	const ariaLabel = `Read blog post: ${frontmatter.title}`;
	const href = `/blog/${frontmatter.slug}`;

	return (
		<Link aria-label={ariaLabel} href={href} passHref>
			<Container aria-label={ariaLabel} href={href}>
				{frontmatter.banner && index <= 2 && (
					<Banner>
						<BannerPlaceholder />
						<Image
							alt={frontmatter.title}
							draggable={false}
							layout="fill"
							loading="lazy"
							src={frontmatter.banner}
						/>
					</Banner>
				)}

				<Content banner={frontmatter.banner && index <= 2}>
					<ContextText>
						<Title>{frontmatter.title}</Title>
						{((frontmatter.description && frontmatter.description_show) || true) && (
							<Description aria-label={frontmatter.description}>
								{frontmatter.description}
							</Description>
						)}
						<Footer>
							<Pill.Date>{frontmatter.date}</Pill.Date>
						</Footer>
					</ContextText>
				</Content>
			</Container>
		</Link>
	);
}

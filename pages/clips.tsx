import Image from 'next/image';
import styled from '@emotion/styled';
import tw from 'twin.macro';

import * as Action from '~/components/List/Action.component';
import { Layout } from '~/layouts';
import { Pill } from '~/components';

import type { Clip, StreamableGetResponse } from '~/types';
import type { GetServerSideProps } from 'next';
import { Icon } from '@iconify/react';

interface ClipsProps {
	clips: string;
}

const Container = styled.div(tw`
	py-24 px-2 sm:px-6 lg:pb-28 lg:px-8
`);

const CardContainer = styled.div(tw`
	flex flex-col \
	bg-white bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 \
	backdrop-filter backdrop-blur-sm \
	border-2 border-gray-100 dark:border-gray-500 \
	rounded-2xl overflow-hidden hover:shadow-xl cursor-pointer \
	transform motion-safe:hover:-translate-y-1 \
	transition ease-in-out duration-300 \
	focus:outline-none focus:ring-4 focus:ring-offset-8 focus:ring-primary-500
`);

const Banner = styled.div(tw`
	relative flex justify-center w-full max-w-xl h-48 \
	my-auto \
	rounded-t-lg overflow-hidden
`);

const BannerPlaceholder = styled.div(tw`
	w-full h-full \
	bg-gray-200 dark:bg-gray-600
	motion-safe:animate-pulse
`);

const Content = styled.div(tw`
	flex-1 flex flex-col justify-between \
	p-6 \
	bg-transparent \
	rounded-2xl lg:rounded-tr-none lg:rounded-tl-none \
	bg-transparent
`);

const ContextText = styled.div(tw`
	flex flex-col flex-1 justify-around \
	rounded-lg \
	text-gray-300 dark:text-gray-400 \
	focus:outline-none focus:ring-4 focus:border-none focus:ring-primary-500
`);

const Title = styled.p(tw`
	text-lg font-bold \
	text-gray-900 dark:text-gray-100
`);

export const getServerSideProps: GetServerSideProps<ClipsProps> = async () => {
	const { default: clipIds } = await import('~/data/clips.json');

	const clips = await Promise.all(
		clipIds.map(async (id) => {
			const response = await fetch(`https://api.streamable.com/videos/${id}`);
			const json = (await response.json()) as StreamableGetResponse;

			const gameName = json.title.includes('|') ? json.title.split('|') : undefined;

			return {
				game: gameName ? gameName[1] : undefined,
				id,
				title: gameName ? gameName[0] : json.title,
				thumbnail_url: `https:${json.thumbnail_url}`,
				url: `https://${json.url}`,
			} as Clip;
		}),
	);

	return {
		props: {
			clips: JSON.stringify(clips),
		},
	};
};

export default function ClipsPage({ clips: rawClips }: ClipsProps) {
	const clips = JSON.parse(rawClips) as Array<Clip>;

	return (
		<Layout.Default seo={{ title: 'nuro ─ clips' }}>
			<Container>
				<div tw="p-1 overflow-hidden">
					<div tw="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
						{clips.map((clip) => (
							<CardContainer>
								<Banner>
									<BannerPlaceholder />
									<Image
										alt={clip.title}
										draggable={false}
										layout="fill"
										loading="lazy"
										src={clip.thumbnail_url}
										tw="absolute top-0 left-0 w-full h-48 object-cover select-none"
									/>
								</Banner>

								<Content>
									<ContextText>
										<Title>{clip.title}</Title>
										<div tw="inline-flex items-center space-x-2 mt-2">
											<Pill.Icon icon="feather:box" tw="flex-1">
												{clip.game}
											</Pill.Icon>

											<span tw="flex-1" />

											<Action.Link
												aria-label="Video URL"
												href={clip.url}
												rel="noopener noreferrer"
												target="_blank">
												<Icon icon="feather:external-link" />
											</Action.Link>
										</div>
									</ContextText>
								</Content>
							</CardContainer>
						))}
					</div>
				</div>
			</Container>
		</Layout.Default>
	);
}

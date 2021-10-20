import styled from '@emotion/styled';
import tw from 'twin.macro';
import { format } from 'date-fns';
import { Icon } from '@iconify/react';

import { Button, Pill } from '~/components';
import { Layout } from '~/layouts';

import type { GetStaticProps } from 'next';

import type { Timeline, TimelineEvent } from '~/types';

interface TimelineProps {
	timeline?: Timeline;
}

const Container = styled.div(tw`
	flex flex-grow min-h-screen \
	pt-16 pb-12
`);

const Content = styled.div(tw`
	flex-grow flex flex-col justify-center max-w-sm sm:max-w-2xl w-full \
	mx-auto px-0 sm:px-16
`);

export const getStaticProps: GetStaticProps<TimelineProps> = async () => {
	const { default: rawTimeline } = await import('~/data/timeline.json');
	const timeline = rawTimeline as Array<TimelineEvent>;

	return {
		props: {
			timeline,
		},
	};
};

export default function TimelinePage({ timeline }: TimelineProps) {
	const sortedTimeline = timeline
		.map((event) => ({
			...event,
			date: new Date(event.date),
		}))
		.sort((a, b) => +new Date(b.date) - +new Date(a.date));

	return (
		<Layout.Default>
			<Container>
				<Content>
					<div tw="flow-root">
						<ul role="list" tw="-mb-8">
							{sortedTimeline.map((event, eventIndex) => (
								<li key={event.title} tw="my-8">
									<div tw="relative pb-8">
										{eventIndex !== sortedTimeline.length - 1 ? (
											<span
												tw="absolute top-8 left-1/2 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-600"
												aria-hidden="true"
											/>
										) : null}
										<div tw="relative flex items-center space-x-3 bg-gray-50 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 backdrop-filter backdrop-blur-sm px-2 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-600">
											<div tw="relative px-1">
												<div tw="h-10 w-10 bg-primary-500 rounded-full flex items-center justify-center">
													<Icon
														icon={event.icon}
														tw="h-5 w-5 text-white"
														aria-hidden="true"
													/>
												</div>
											</div>

											<div tw="min-w-0 flex-1">
												<h1 tw="flex justify-between mb-2 text-gray-500 dark:text-white text-lg tracking-tight font-bold">
													<span>{event.title}</span>
													<Pill.Date small>
														{format(event.date, 'PPP')}
													</Pill.Date>
												</h1>
												<div tw="my-2 text-base text-gray-300">
													<p>{event.description}</p>
												</div>
												{event.link && (
													<Button.Outline
														small
														tw="mt-2"
														href={event.link.url}>
														{event.link.text}
														<Icon
															tw="ml-3"
															icon="feather:external-link"
														/>
													</Button.Outline>
												)}
											</div>
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>
				</Content>
			</Container>
		</Layout.Default>
	);
}

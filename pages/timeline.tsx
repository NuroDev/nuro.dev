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

const List = styled.ul(tw`
	-mb-8
`);

const ListItem = styled.li(tw`
	my-1
`);

const ListItemContainer = styled.div(tw`
	relative \
	pb-8
`);

const TimelineConnector = styled.span(tw`
	absolute top-1 left-1/2 w-0.5 h-full \
	-ml-px \
	bg-gray-200 dark:bg-gray-600
`);

const EventCard = styled.div(tw`
	relative flex items-center space-x-3 \
	bg-gray-50 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 \
	backdrop-filter backdrop-blur-sm \
	px-2 py-3 \
	border-2 border-gray-200 dark:border-gray-600 \
	rounded-lg
`);

const EventIconContainer = styled.div(tw`
	relative flex items-center justify-center w-10 h-10 \
	bg-primary-500 \
	mx-2 px-1 \
	rounded-full
`);

const EventIcon = styled(Icon)(tw`
	w-5 h-5 \
	text-white
`);

const EventBody = styled.div(tw`
	min-w-0 flex-1
`);

const Title = styled.h1`
	${tw`
		flex flex-wrap justify-between \
		mb-2 \
		text-gray-500 dark:text-white \
		text-lg tracking-tight font-bold
	`}

	div {
		${tw`mt-2 sm:mt-0`}
	}
`;

const Description = styled.p(tw`
	my-2 \
	text-gray-300 \
	text-base
`);

const EventLinkButton = styled(Button.Outline)(tw`
	mt-2
`);

const EventLinkButtonIcon = styled(Icon)(tw`
	ml-3
`);

export const getStaticProps: GetStaticProps<TimelineProps> = async () => {
	const { default: rawTimeline } = await import('~/data/timeline.json');
	const timeline = (rawTimeline as Array<TimelineEvent>).sort(
		(a, b) => +new Date(b.date) - +new Date(a.date),
	);

	return {
		props: {
			timeline,
		},
	};
};

export default function TimelinePage({ timeline: rawTimeline }: TimelineProps) {
	const timeline = rawTimeline.map((event) => ({
		...event,
		date: new Date(event.date),
	}));

	return (
		<Layout.Default>
			<Container>
				<Content>
					<List role="list">
						{timeline.map((event, eventIndex) => (
							<ListItem key={event.title}>
								<ListItemContainer tw="">
									{eventIndex !== timeline.length - 1 ? (
										<TimelineConnector aria-hidden="true" />
									) : null}

									<EventCard>
										<EventIconContainer>
											<EventIcon icon={event.icon} aria-hidden="true" />
										</EventIconContainer>

										<EventBody>
											<Title>
												<span>{event.title}</span>
												<Pill.Date small>
													{format(event.date, 'PPP')}
												</Pill.Date>
											</Title>

											<Description>{event.description}</Description>

											{event.link && (
												<EventLinkButton small href={event.link.url}>
													{event.link.text}
													<EventLinkButtonIcon icon="feather:external-link" />
												</EventLinkButton>
											)}
										</EventBody>
									</EventCard>
								</ListItemContainer>
							</ListItem>
						))}
					</List>
				</Content>
			</Container>
		</Layout.Default>
	);
}

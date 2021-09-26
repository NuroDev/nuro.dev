import { Icon } from '@iconify/react';

import { Timeline } from '../types';
import { GetStaticProps } from 'next';

interface TimelineProps {
	timeline?: Timeline;
}

export const getStaticProps: GetStaticProps<TimelineProps> = async () => {
	const timeline = await (await import('../data/timeline.json')).default;

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
		<div>
			{sortedTimeline.map((event, index) => (
				<div key={index}>
					<h1>{event.date.getFullYear()}</h1>
					<h1>{event.title}</h1>
					<Icon icon={event.icon} />
				</div>
			))}
		</div>
	);
}

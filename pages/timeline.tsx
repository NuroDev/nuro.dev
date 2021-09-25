import { Icon } from '@iconify/react';
import { join } from 'path';
import { readFileSync } from 'fs';

import { Timeline } from '../types';

interface TimelineProps {
	timeline: Timeline;
}

export async function getStaticProps() {
	const rawTimeline = readFileSync(join(process.cwd(), 'data', 'timeline.json'), 'utf-8');
	const timeline = JSON.parse(rawTimeline);

	return {
		props: {
			timeline,
		},
	};
}

export default function TimelinePage({ timeline }: TimelineProps) {
	return (
		<div>
			{Object.entries(timeline).map(([year, events], index) => {
				return events.map((event) => (
					<div key={index}>
						<h1>{year}</h1>
						<h1>{event.title}</h1>
						<Icon icon={event.icon} />
					</div>
				));
			})}
		</div>
	);
}

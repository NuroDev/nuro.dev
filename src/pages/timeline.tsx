import { format, parse } from 'date-fns';
import { Icon } from '@iconify/react';

import { Button, Pill } from '~/components';
import { Layout } from '~/layouts';

import type { GetStaticProps } from 'next';

import type { Timeline, TimelineEvent } from '~/types';

interface TimelineProps {
	timeline?: Timeline;
}

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

export default function TimelinePage({ timeline: rawTimeline }: TimelineProps): JSX.Element {
	const timeline = rawTimeline.map((event) => ({
		...event,
		// Note: Custom parser needed as Safari on iOS doesn't like the standard `new Date()` parsing
		date: parse(event.date.toString(), 'MM-dd-yyyy', new Date()),
	}));

	return (
		<Layout.Default seo={{ title: 'nuro ─ timeline' }}>
			<div className="flex flex-grow min-h-screen pt-16 pb-12">
				<div className="flex-grow flex flex-col justify-center max-w-sm sm:max-w-2xl w-full mx-auto px-0 sm:px-16">
					<ul className="-mb-8" role="list">
						{timeline.map((event, index) => (
							<li className="my-1" key={event.title}>
								<div className="relative pb-8">
									{index !== timeline.length - 1 && (
										<span
											aria-hidden="true"
											className="absolute top-1 left-1/2 w-0.5 h-full -ml-px bg-gray-200 dark:bg-gray-600"
										/>
									)}

									<div className="relative flex items-center space-x-3 bg-gray-50 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 backdrop-filter backdrop-blur-sm px-2 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg">
										<div className="relative flex items-center justify-center w-12 h-12 bg-primary-500 bg-opacity-15 backdrop-filter backdrop-blur-sm saturate-200 mx-2 px-1 rounded-full">
											<Icon
												aria-hidden="true"
												className="w-6 h-6 text-primary-500"
												icon={event.icon}
											/>
										</div>

										<div className="min-w-0 flex-1">
											<h1 className="flex flex-wrap justify-between mb-2 text-gray-500 dark:text-white text-lg tracking-tight font-bold">
												<span>{event.title}</span>
												<span className="flex-1 sm:hidden" />
												<Pill.Date className="mt-2 sm:mt-0" small={true}>
													{format(event.date, 'PPP')}
												</Pill.Date>
											</h1>

											<p className="my-2 text-gray-300 text-base">
												{event.description}
											</p>

											{event.link && (
												<Button.Outline
													className="mt-2"
													href={event.link.url}
													rel="noopener noreferrer"
													small={true}
													target="_blank">
													{event.link.text}
													<Icon
														aria-hidden="true"
														className="ml-3"
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
			</div>
		</Layout.Default>
	);
}

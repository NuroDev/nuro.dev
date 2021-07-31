import type { Timeline, FullTimeline, TimelineEvent } from '~/types';

/**
 * Fetch all timeline events as a concatenated object of all `.json` files inside the `src/content/timeline/` directory.
 */
export function useTimeline(): FullTimeline {
	const years = import.meta.globEager(`../content/timeline/*.json`);

	const entries = Object.keys(years).map((year) => {
		const splitPath = year.split('/');
		const readableYear = splitPath[splitPath.length - 1].split('.')[0];

		const { default: data } = years[year] as {
			default: Array<TimelineEvent>;
		};
		const json: Timeline = data.map((event) => ({
			...event,
			date: new Date(event.date),
		}));

		return [readableYear, json];
	});

	return Object.fromEntries(entries);
}

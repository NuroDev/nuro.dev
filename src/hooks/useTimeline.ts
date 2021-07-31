import type { CustomTimeline, FullTimeline, TimelineEvent } from '~/types';

export async function useTimeline(
	customYear?: string,
): Promise<FullTimeline | CustomTimeline | null> {
	if (customYear) {
		try {
			const { default: json } = await import(`../content/timeline/${customYear}.json`);

			return json as CustomTimeline;
		} catch (error) {
			return null;
		}
	}

	const years = import.meta.glob('../content/timeline/*.json');

	const entries = Object.keys(years).map(async (year) => {
		const splitPath = year.split('/');
		const readableYear = splitPath[splitPath.length - 1].split('.')[0];

		const { default: json } = await years[year]();

		return [readableYear, json];
	});
	const loadedEntries = await Promise.all(entries);
	const data = Object.fromEntries(loadedEntries);

	return data;
}

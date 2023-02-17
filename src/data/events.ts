import type { IconName } from '~/types/icon';

export interface TimelineEvent {
	date: Date | `${number}-${number}-${number}`;
	description?: string;
	icon: IconName;
	link?: {
		text: string;
		url: string;
	};
	title: string;
}

/**
 * Get your all events for your timeline
 *
 * This function allows you to either manually write out
 * your timeline events by hand, or you can fetch it from an
 * external API.
 *
 * @returns {Promise<Array<TimelineEvent>>} The array of timeline events
 */
export async function getTimelineEvents(): Promise<Array<TimelineEvent>> {
	return [
		{
			date: '03-14-2022',
			title: 'Started @ Wander',
			description: 'Joined the Wander team',
			icon: 'Briefcase',
			link: {
				text: 'Visit Wander',
				url: 'https://wander.com/',
			},
		},
		{
			date: '10-22-2021',
			title: 'Launched nuro.dev',
			description: 'Successfully launched my newly re-designed portfolio',
			icon: 'Award',
		},
		{
			date: '03-15-2021',
			title: 'Started @ Attio',
			description: 'Joined the Attio team',
			icon: 'Briefcase',
			link: {
				text: 'Visit Attio',
				url: 'https://attio.com/',
			},
		},
		{
			date: '11-16-2020',
			title: 'Started @ Aiming.pro',
			description: 'Joined the Aiming.pro team',
			icon: 'Briefcase',
			link: {
				text: 'Visit Aiming.pro',
				url: 'https://aiming.pro/',
			},
		},
		{
			date: '07-15-2020',
			title: 'Graduated University!',
			description: "Successfully completed my Bachelor's Degree",
			icon: 'Award',
		},
		{
			date: '10-11-2018',
			title: 'First Developer Role',
			description: 'Began an internship as a junior developer working at Stink Studios',
			icon: 'Briefcase',
			link: {
				text: 'Visit Stink Studios',
				url: 'https://stinkstudios.com/',
			},
		},
		{
			date: '11-04-2016',
			title: 'First Job!',
			description:
				'Began my first part-time job as a junior service desk analyist at CreeperHost',
			icon: 'Briefcase',
			link: {
				text: 'Visit CreeperHost',
				url: 'http://creeperhost.net/',
			},
		},
		{
			date: '09-10-2016',
			title: 'Start University',
			description: 'Began studying Computer Games Programming at Staffordshire University',
			icon: 'Book',
		},
		{
			date: '08-09-1997',
			title: 'Birthday!',
			description: 'I was born the 9th of August 1997',
			icon: 'Gift',
		},
	];
}

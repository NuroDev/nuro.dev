import { getHomepageLinks } from './links';
import { getProjects } from './projects';
import { getReferrals } from './referrals';
import { getTimelineEvents } from './events';

import type { HomepageLink } from './links';
import type { Project } from './projects';
import type { Referral } from './referrals';
import type { TimelineEvent } from './events';

export interface Profile {
	/**
	 * Alias
	 *
	 * @description An alias or "short name" you prefer to go by.
	 *
	 * This is primarily used for the page title suffix.
	 *
	 * @example `nuro` would make the page title `developer ─ nuro`
	 */
	alias: string;
	/**
	 * Bio
	 *
	 * @description A short description of yourself used for HTML & OpenGraph description data
	 */
	bio: string;
	/**
	 * Discord ID
	 *
	 * @description Your Discord account ID
	 *
	 * @see https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-
	 *
	 * If no ID is provided, the status page & all status logic is disabled
	 */
	discordAccountId?: string;
	/**
	 * Handle
	 *
	 * @description Twitter handle
	 */
	handle?: `@${string}`;
	/**
	 * Links
	 *
	 * @description A list of links you want to show on the home page
	 */
	links?: Array<HomepageLink>;
	/**
	 * Name
	 *
	 * @description Your personal name or name you want to show on the home page
	 */
	name: string;
	/**
	 * Projects
	 *
	 * @description A list of projects you want to show on the projects page
	 *
	 * If none are provided, a link to the page will not be generate & instead it will be redirected to the homepage
	 *
	 * @TODO Unimplemented
	 */
	projects?: Array<Project>;
	/**
	 * Referrals
	 *
	 * @description A list of referral links you want to show on the referrals page
	 *
	 * If none are provided, a link to the page will not be generate & instead it will be redirected to the homepage
	 *
	 * @TODO Unimplemented
	 */
	referrals?: Array<Referral>;
	/**
	 * Timeline
	 *
	 * @description A list of events you want to show on the timeline page
	 *
	 * If none are provided, a link to the page will not be generate & instead it will be redirected to the homepage
	 *
	 * @TODO Unimplemented
	 */
	timeline?: Array<TimelineEvent>;
}

/**
 * Get your personal profile data.
 *
 * This function allows you to either manually write out
 * your profile data by hand, or you can fetch it from an
 * external API.
 *
 * @returns {Promise<Profile>} The profile data
 */
export async function getProfile(): Promise<Profile> {
	const [links, projects, referrals, timeline] = await Promise.all([
		getHomepageLinks(),
		getProjects(),
		getReferrals(),
		getTimelineEvents(),
	]);

	return {
		alias: 'nuro',
		bio: "Hey 👋 I'm Ben, a developer",
		discordAccountId: '84300695947218944',
		handle: '@nurodev',
		links,
		name: 'Ben',
		projects,
		referrals,
		timeline,
	};
}

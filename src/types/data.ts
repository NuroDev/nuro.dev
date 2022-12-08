import type { NextSeoProps } from 'next-seo';
import type { OpenGraph, Twitter } from 'next-seo/lib/types';

import type { IconName } from './icon';

export interface HomepageLink {
	external?: boolean;
	href: string;
	icon: IconName;
	label: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Project {}

export interface Referral {
	aliases?: Array<string>;
	bonus?: string;
	code?: string;
	color?: string;
	description: string;
	homepage: string;
	icon: IconName;
	name: string;
	url: string;
}

export interface Seo extends Pick<NextSeoProps, 'title' | 'titleTemplate' | 'description'> {
	openGraph: Pick<OpenGraph, 'title' | 'siteName'>;
	twitter: Pick<Twitter, 'cardType' | 'handle' | 'site'>;
}

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

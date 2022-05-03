/**
 * Referral
 *
 * @description A single referral code & its respective data like codes, links, etc
 */
export interface Referral {
	aliases?: Array<string>;
	bonus?: string;
	code?: string;
	color?: string;
	description: string;
	homepage: string;
	icon: string;
	name: string;
	url: string;
}

/**
 * Referrals
 *
 * @description An array of all referrals
 */
export type Referrals = Array<Referral>;

/**
 * Timeline event
 *
 * @description A single timeline event, such as a new job, birthday, etc
 */
export interface TimelineEvent {
	date: Date | string;
	description?: string;
	icon: string;
	link?: TimelineLink;
	title: string;
}

interface TimelineLink {
	text: string;
	url: string;
}

/**
 * Timeline
 *
 * @description An array of all timeline events
 */
export type Timeline = Array<TimelineEvent>;

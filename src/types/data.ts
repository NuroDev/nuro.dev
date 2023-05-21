export interface Event {
	date: Date | string;
	description?: string;
	icon: string;
	link?: {
		text: string;
		url: string;
	};
	title: string;
}

export interface Project {}

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

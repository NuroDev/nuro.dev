export interface Post {
	banner?: {
		alt: string;
		url: string;
	};
	date: Date;
	description: string;
	layout: `~/layouts/${string}.layout.astro`;
	title:
		| string
		| {
				prefix: string;
				text: string;
		  };
}

export interface Referral {
	aliases?: Array<string>;
	bonus?: string;
	code?: string;
	color: `#${string}`;
	description: string;
	homepage: string;
	icon: string;
	name: string;
	url: string;
}

export interface TimelineEvent {
	date: `${number}-${number}-${number}`;
	description: string;
	icon: string;
	link?: {
		text: string;
		url: `http://${string}` | `https://${string}`;
	};
	title: string;
}

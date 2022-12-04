import type { NextSeoProps } from 'next-seo';
import type { OpenGraph, Twitter } from 'next-seo/lib/types';

import type { IconName } from './icon';

export interface PageAction {
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

export interface Timeline {
	date: Date | `${number}-${number}-${number}`;
	description?: string;
	icon: IconName;
	link?: {
		text: string;
		url: string;
	};
	title: string;
}

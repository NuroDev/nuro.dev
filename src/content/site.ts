import type { OpenGraph, Twitter } from '~/types/site';

export const title: string = 'developer ─ nuro';

export const description: string = "Hey 👋 I'm Ben, a developer";

export const siteUrl: URL = new URL('https://nuro.dev');

export const themeColor: `#${string}` = '#0068f5';

export const twitter: Twitter = {
	cardType: 'summary_large_image',
	handle: '@nurodev',
	site: '@nurodev',
};

export const openGraph: OpenGraph = {
	locale: 'en_GB',
	siteName: 'nuro',
	type: 'website',
};

import type { OpenGraph, Twitter } from '~/types/site';

export const title: string = 'My personal website.';

export const description: string = 'Welcome to my website!';

export const siteUrl: URL = new URL('https://nuro.dev');

export const themeColor: `#${string}` = '#ffffff';

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

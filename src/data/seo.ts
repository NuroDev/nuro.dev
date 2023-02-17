import { env } from '~/env';
import { getProfile } from './profile';

import type { NextSeoProps } from 'next-seo';
import type { OpenGraph, Twitter } from 'next-seo/lib/types';

export interface Seo extends Pick<NextSeoProps, 'title' | 'titleTemplate' | 'description'> {
	openGraph: Pick<OpenGraph, 'title' | 'siteName'>;
	twitter: Pick<Twitter, 'cardType' | 'handle' | 'site'>;
}

/**
 * Get the site SEO data.
 *
 * This function allows you to either manually write out
 * your SEO data by hand, or you can fetch it from an
 * external API.
 *
 * @returns {Seo} The SEO data
 */
export async function getSeo(): Promise<Seo> {
	const profile = await getProfile();

	return {
		title: 'developer',
		titleTemplate: `%s ─ ${profile.alias}`,
		description: profile.bio,
		openGraph: {
			title: `developer ─ ${profile.alias}`,
			siteName: env.DOMAIN,
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: profile.handle,
			site: profile.handle,
		},
	};
}

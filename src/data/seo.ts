import { profile } from './profile';

import type { Seo } from '~/types/data';

export const defaultSeo: Seo = {
	title: 'developer',
	titleTemplate: `%s ─ ${profile.alias}`,
	description: profile.bio,
	openGraph: {
		title: `developer ─ ${profile.alias}`,
		siteName: profile.domain || process.env.VERCEL_URL,
	},
	twitter: {
		cardType: 'summary_large_image',
		handle: profile.handle,
		site: profile.handle,
	},
};

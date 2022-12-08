import { env } from '~/env';
import { profile } from './profile';

import type { Seo } from '~/types/data';

export const defaultSeo: Seo = {
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

import type { IconName } from '~/types/icon';

export interface HomepageLink {
	external?: boolean;
	href: string;
	icon: IconName;
	label: string;
}

/**
 * Get all the links you want to show on the home page.
 *
 * This function allows you to either manually write out
 * your homepage links by hand, or you can fetch it from an
 * external API.
 *
 * @returns {Promise<Array<HomepageLink>>} The array of homepage links
 */
export async function getHomepageLinks(): Promise<Array<HomepageLink>> {
	return [
		{
			href: '/blog',
			icon: 'Edit3',
			label: 'Blog',
		},
		{
			href: '/projects',
			icon: 'Copy',
			label: 'Projects',
		},
		{
			external: true,
			href: 'https://github.com/nurodev',
			icon: 'Github',
			label: 'GitHub',
		},
	];
}

import type { IconName } from '~/types/icon';

export const indexPageActions: Array<{
	external?: boolean;
	href: string;
	icon: IconName;
	label: string;
}> = [
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

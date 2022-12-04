import type { PageAction } from '~/types/data';

export const name = 'Ben';

export const actions: Array<PageAction> = [
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

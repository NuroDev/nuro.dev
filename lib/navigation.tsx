import { useMemo } from 'react';
import { useTheme } from 'next-themes';

import { Status } from '~/components';
import { usePersistantState, useStatus } from '~/lib';

import { DiscordStatus, NavigationItemType, Theme } from '~/types';

import type { NavigationItem, NavigationItems } from '~/types';

const staticItems: Array<Array<NavigationItem>> = [
	[
		{
			type: NavigationItemType.LINK,
			icon: 'feather:home',
			text: 'Home',
			href: '/',
		},
		{
			type: NavigationItemType.LINK,
			icon: 'feather:edit-3',
			text: 'Blog',
			href: '/blog',
		},
		{
			type: NavigationItemType.LINK,
			icon: 'feather:copy',
			text: 'Projects',
			href: '/projects',
		},
		{
			type: NavigationItemType.LINK,
			icon: 'feather:clock',
			text: 'Timeline',
			href: '/timeline',
		},
		{
			type: NavigationItemType.LINK,
			icon: 'feather:link',
			text: 'Referrals',
			href: '/referrals',
		},
	],
	[
		{
			type: NavigationItemType.LINK,
			icon: 'feather:twitter',
			text: 'Twitter',
			href: 'https://twitter.com/nurodev',
			external: true,
		},
		{
			type: NavigationItemType.LINK,
			icon: 'feather:github',
			text: 'GitHub',
			href: 'https://github.com/nurodev',
			external: true,
		},
	],
];

export function useNavigation() {
	const state = usePersistantState();
	const { background, sound } = state.get();
	const { theme, setTheme } = useTheme();
	const { color, loading, status } = useStatus();

	const isDark = useMemo(() => {
		if (theme === Theme.SYSTEM)
			return window.matchMedia('(prefers-color-scheme: dark)').matches;

		return theme === Theme.DARK;
	}, [theme]);

	let items: NavigationItems = [
		...staticItems,
		[
			{
				type: NavigationItemType.ACTION,
				icon: 'feather:image',
				text: 'Graphics',
				onClick: () =>
					state.set((settings) => ({
						...settings,
						background: !settings.background,
					})),
			},
			{
				type: NavigationItemType.ACTION,
				icon: state.get().sound ? 'feather:volume-2' : 'feather:volume-x',
				text: 'Sounds',
				onClick: () =>
					state.set((settings) => ({
						...settings,
						sound: !settings.sound,
					})),
			},
			{
				type: NavigationItemType.ACTION,
				icon: isDark ? 'feather:sun' : 'feather:moon',
				text: isDark ? 'Light Mode' : 'Dark Mode',
				onClick: () => setTheme(isDark ? 'light' : 'dark'),
			},
		],
	];

	if (status && !loading && status.discord_status !== DiscordStatus.OFFLINE) {
		items.push([
			{
				type: NavigationItemType.LINK,
				icon: (
					<Status.Indicator
						color={color}
						pulse={status.discord_status !== DiscordStatus.OFFLINE}
					/>
				),
				text: 'Status',
				href: '/status',
			},
		]);
	}

	return items;
}

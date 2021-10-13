import Link from 'next/link';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Icon } from '@iconify/react';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useMemo } from 'react';
import { useSound } from 'use-sound';
import { useTheme } from 'next-themes';

import { Button, Navbar, Status } from '..';
import { SettingsItemType, Theme as ThemeTypes } from '~/types';

import type { SettingsItem } from '~/types';

const StyledMenu = styled(Menu)(tw`
	relative inline-block \
	text-left
`);

const StyledItems = styled(Menu.Items)(tw`
	origin-top-right absolute right-0 w-56 \
	mt-4 \
	bg-white bg-opacity-75 dark:bg-gray-800 dark:bg-opacity-75 \
	backdrop-filter backdrop-blur-sm \
	border border-gray-100 dark:border-gray-500 \
	rounded-md shadow-lg \
	ring-1 ring-black ring-opacity-5 \
	divide-y divide-gray-100 dark:divide-gray-600 \
	focus:outline-none
`);

const MenuSection = styled.div(tw`
	py-2
`);

const MenuButton = styled.a<{ $active: boolean }>`
	${tw`flex items-center \
		px-4 py-3 \
		text-sm \
		cursor-pointer
	`}
	${({ $active }) =>
		$active
			? tw`bg-gray-100 bg-opacity-50 dark:bg-gray-700 dark:bg-opacity-50 text-gray-900 dark:text-white`
			: tw`text-gray-700 dark:text-gray-400`}
`;

const MenuButtonIcon = styled(Icon)(tw`
	w-5 h-5 \
	mr-3
`);

export function Settings() {
	const { theme, setTheme } = useTheme();
	const [play] = useSound('/sounds/click.ogg', {
		volume: 0.25,
	});

	const isDark = useMemo(() => {
		if (theme === ThemeTypes.SYSTEM)
			return window.matchMedia('(prefers-color-scheme: dark)').matches;

		return theme === ThemeTypes.DARK;
	}, [theme]);

	function toggleTheme() {
		play();
		setTheme(isDark ? 'light' : 'dark');
	}

	const items: Array<Array<SettingsItem>> = [
		[
			{
				type: SettingsItemType.ITEM,
				icon: 'feather:clock',
				text: 'Timeline',
				href: '/timeline',
			},
		],
		[
			{
				type: SettingsItemType.ITEM,
				icon: isDark ? 'feather:sun' : 'feather:moon',
				text: isDark ? 'Light Mode' : 'Dark Mode',
				onClick: () => setTheme(isDark ? 'light' : 'dark'),
			},
			{
				type: SettingsItemType.ITEM,
				icon: 'feather:image',
				text: 'Animations',
				onClick: () => {},
			},
		],
		[
			{
				type: SettingsItemType.CUSTOM_ITEM,
				icon: <Status.Indicator />,
				text: 'Status',
				href: '/status',
			},
		],
	];

	return (
		<StyledMenu as="div">
			<Menu.Button>
				<Button.Icon aria-label="More" className="group">
					<Navbar.Icon icon={'feather:more-horizontal'} />
				</Button.Icon>
			</Menu.Button>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95">
				<StyledItems>
					{items.map((section) => (
						<MenuSection>
							{section.map((item) => (
								<Menu.Item key={item.text}>
									{({ active }) => {
										if ('href' in item)
											return (
												<Link href={item.href}>
													<MenuButton className="group" $active={active}>
														{item.type === SettingsItemType.ITEM ? (
															<MenuButtonIcon
																icon={item.icon}
																aria-hidden="true"
															/>
														) : (
															item.icon
														)}
														{item.text}
													</MenuButton>
												</Link>
											);

										return (
											<MenuButton
												className="group"
												$active={active}
												onClick={() => {
													play();
													item.onClick();
												}}>
												{item.type === SettingsItemType.ITEM ? (
													<MenuButtonIcon
														icon={item.icon}
														aria-hidden="true"
													/>
												) : (
													item.icon
												)}
												{item.text}
											</MenuButton>
										);
									}}
								</Menu.Item>
							))}
						</MenuSection>
					))}

					{/* <MenuSection>
						<Menu.Item>
							{({ active }) => (
								<Link href="/timeline">
									<MenuButton className="group" $active={active}>
										<MenuButtonIcon icon="feather:clock" aria-hidden="true" />
										Timeline
									</MenuButton>
								</Link>
							)}
						</Menu.Item>
					</MenuSection>
					<MenuSection>
						<Menu.Item>
							{({ active }) => (
								<MenuButton
									className="group"
									$active={active}
									onClick={toggleTheme}>
									<MenuButtonIcon
										icon={isDark ? 'feather:sun' : 'feather:moon'}
										aria-hidden="true"
									/>
									{isDark ? 'Light Mode' : 'Dark Mode'}
								</MenuButton>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<MenuButton className="group" $active={active}>
									<MenuButtonIcon icon="feather:image" aria-hidden="true" />
									Animations
								</MenuButton>
							)}
						</Menu.Item>
					</MenuSection>

					<MenuSection>
						<Menu.Item>
							{({ active }) => (
								<Link href="/status">
									<MenuButton className="group" $active={active}>
										<Status.Indicator />
										Status
									</MenuButton>
								</Link>
							)}
						</Menu.Item>
					</MenuSection> */}
				</StyledItems>
			</Transition>
		</StyledMenu>
	);
}

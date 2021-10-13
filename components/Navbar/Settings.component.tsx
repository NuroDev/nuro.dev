import Link from 'next/link';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Fragment, useMemo } from 'react';
import { Icon } from '@iconify/react';
import { Menu, Transition } from '@headlessui/react';
import { useLanyard } from 'use-lanyard';
import { useSound } from 'use-sound';
import { useTheme } from 'next-themes';

import { Button, Navbar, Status } from '..';
import { DiscordStatus, SettingsItemType, Theme as ThemeTypes } from '~/types';

import type { AnchorHTMLAttributes } from 'react';
import type { Data } from 'use-lanyard';

import type { SettingsItem } from '~/types';

interface MenuLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	$active: boolean;
}

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

const MenuButton = styled.a<Pick<MenuLinkProps, '$active'>>`
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

/**
 * Menu Link
 *
 * @see https://headlessui.dev/react/menu#integrating-with-next-js
 */
const MenuLink = ({ children, href, ...rest }: MenuLinkProps) => (
	<Link href={href}>
		<MenuButton {...rest}>{children}</MenuButton>
	</Link>
);

export function Settings() {
	const { theme, setTheme } = useTheme();
	const [playClick] = useSound('/sounds/click.ogg', {
		volume: 0.25,
	});

	const isDark = useMemo(() => {
		if (theme === ThemeTypes.SYSTEM)
			return window.matchMedia('(prefers-color-scheme: dark)').matches;

		return theme === ThemeTypes.DARK;
	}, [theme]);

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
	];

	return (
		<StyledMenu as="div">
			<Menu.Button as={Fragment}>
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
				leaveTo="transform opacity-0 scale-95"
			>
				<StyledItems>
					{items.map((section, index) => (
						<MenuSection key={index}>
							{section.map((item) => (
								<Menu.Item key={item.text}>
									{({ active }) => {
										if ('href' in item)
											return (
												<MenuLink $active={active} href={item.href}>
													{item.type === SettingsItemType.ITEM ? (
														<MenuButtonIcon
															icon={item.icon}
															aria-hidden="true"
														/>
													) : (
														item.icon
													)}
													{item.text}
												</MenuLink>
											);

										return (
											<MenuButton
												className="group"
												$active={active}
												onClick={() => {
													playClick();
													item.onClick();
												}}
											>
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
				</StyledItems>
			</Transition>
		</StyledMenu>
	);
}

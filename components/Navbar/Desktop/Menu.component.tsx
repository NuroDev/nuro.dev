import Link from 'next/link';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Fragment } from 'react';
import { Icon } from '@iconify/react';
import { Menu, Transition } from '@headlessui/react';

import { Button, Navbar } from '~/components';
import { NavigationItemType, WithClassName } from '~/types';
import { useClick } from '~/lib';

import type { AnchorHTMLAttributes, ReactNode } from 'react';
import type { PlayFunction } from 'use-sound/dist/types';

import type { NavigationItems } from '~/types';

interface MenuDropdownProps {
	items: NavigationItems;
}

interface MenuLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	$active: boolean;
	playSound: PlayFunction;
}

interface MenuButtonIconProps extends WithClassName {
	icon: string | ReactNode;
	type?: 'standard' | 'settings';
}

const StyledMenu = styled(Menu)(tw`
	relative inline-block \
	text-left
`);

const StyledTransition = styled(Transition)`
	&.enter {
		${tw`transition ease-in-out duration-100`}
	}
	&.enterFrom {
		${tw`transform scale-95 opacity-0`}
	}
	&.enterTo {
		${tw`transform scale-100 opacity-100`}
	}
	&.leave {
		${tw`transition ease-in-out duration-100`}
	}
	&.leaveFrom {
		${tw`transform scale-100 opacity-100`}
	}
	&.leaveTo {
		${tw`transform scale-95 opacity-0`}
	}
`;

const StyledItems = styled(Menu.Items)(tw`
	origin-top-left absolute left-0 w-56 \
	mt-2 \
	bg-gray-50 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 \
	backdrop-filter backdrop-blur-sm \
	border border-gray-100 dark:border-gray-500 \
	rounded-md shadow-lg \
	divide-y divide-gray-100 dark:divide-gray-500 \
	focus:outline-none
`);

const MenuSection = styled.div(tw`
	py-2
`);

const StyledMenuItem = styled.a<Pick<MenuLinkProps, '$active'>>`
	${tw`
		flex items-center \
		px-4 py-3 \
		text-sm font-medium tracking-wide \
		rounded-md cursor-pointer \
		transition ease-in-out duration-300
	`}

	${({ $active }) =>
		$active
			? tw`bg-gray-100 bg-opacity-50 dark:bg-gray-700 dark:bg-opacity-50 text-gray-900 dark:text-white`
			: tw`text-gray-300 hover:text-gray-700 dark:hover:text-white`}
`;

const MenuItemSpacer = styled.span(tw`
	flex-1
`);

const StyledMenuIcon = styled(Icon)(tw`
	w-5 h-5 \
	mr-3
`);

const SettingsIcon = styled(Icon)(tw`
	w-4 h-4 \
	ml-3
`);

function MenuButtonIcon({ className, icon, type = 'standard' }: MenuButtonIconProps) {
	if (typeof icon !== 'string') return <>{icon}</>;

	if (type === 'settings')
		return <SettingsIcon className={className} icon={icon} aria-hidden="true" />;

	return <StyledMenuIcon className={className} icon={icon} aria-hidden="true" />;
}

/**
 * Menu Link
 *
 * @see https://headlessui.dev/react/menu#integrating-with-next-js
 */
function MenuLink({ children, href, onClick, playSound, ...rest }: MenuLinkProps) {
	return (
		<Link href={href}>
			<StyledMenuItem
				onClick={(...args) => {
					playSound();
					onClick(...args);
				}}
				{...rest}>
				{children}
			</StyledMenuItem>
		</Link>
	);
}

export function MenuDropdown({ items }: MenuDropdownProps) {
	const [playClick] = useClick();

	return (
		<StyledMenu as="div">
			<Menu.Button as={Fragment}>
				<Button.Icon aria-label="More" className="group">
					<Navbar.Icon icon={'feather:menu'} />
				</Button.Icon>
			</Menu.Button>

			<StyledTransition
				as={Fragment}
				enter="enter"
				enterFrom="enterFrom"
				enterTo="enterTo"
				leave="leave"
				leaveFrom="leaveFrom"
				leaveTo="leaveTo">
				<StyledItems>
					{items.map((section, index) => (
						<MenuSection key={index}>
							{section.map((item) => (
								<Menu.Item key={item.text}>
									{({ active }) => {
										switch (item.type) {
											case NavigationItemType.ACTION:
												return (
													<StyledMenuItem
														$active={active}
														className="group"
														onClick={() => {
															playClick();
															item.onClick();
														}}>
														<MenuButtonIcon icon={item.icon} />
														{item.text}
														{item.endIcon && (
															<>
																<MenuItemSpacer />
																<MenuButtonIcon
																	type="settings"
																	icon={item.endIcon}
																/>
															</>
														)}
													</StyledMenuItem>
												);
											case NavigationItemType.LINK:
												const external = item.external ?? false;
												if (external)
													return (
														<StyledMenuItem
															className="group"
															$active={active}
															onClick={() => playClick}
															href={item.href}
															rel="noopener noreferrer"
															target="_blank">
															<MenuButtonIcon icon={item.icon} />
															{item.text}
														</StyledMenuItem>
													);

												return (
													<MenuLink
														$active={active}
														playSound={playClick}
														href={item.href}>
														<MenuButtonIcon icon={item.icon} />
														{item.text}
													</MenuLink>
												);
										}
									}}
								</Menu.Item>
							))}
						</MenuSection>
					))}
				</StyledItems>
			</StyledTransition>
		</StyledMenu>
	);
}

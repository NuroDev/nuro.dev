import Link from 'next/link';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Fragment } from 'react';
import { Icon } from '@iconify/react';
import { Menu, Transition } from '@headlessui/react';

import { Button, Navbar } from '~/components';
import { NavigationItemType } from '~/types';
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

interface MenuButtonIconProps {
	icon: string | ReactNode;
}

const StyledMenu = styled(Menu)(tw`
	relative inline-block \
	text-left
`);

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

const StyledMenuIcon = styled(Icon)(tw`
	w-5 h-5 \
	mr-3
`);

function MenuButtonIcon({ icon }: MenuButtonIconProps) {
	if (typeof icon !== 'string') return <>{icon}</>;

	return <StyledMenuIcon icon={icon} aria-hidden="true" />;
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

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95">
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
															href={item.href}>
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
			</Transition>
		</StyledMenu>
	);
}

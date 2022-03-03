import Link from 'next/link';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Fragment } from 'react';
import { Icon } from '@iconify/react';
import { Menu } from '@headlessui/react';

import { Transition } from '~/components';
import { NavigationItemType, WithChildren, WithClassName } from '~/types';

import type { AnchorHTMLAttributes, ReactNode } from 'react';

import type { NavigationItems } from '~/types';

type Position = 'top-left' | 'top-right';

interface StandardProps extends WithChildren {
	items: NavigationItems;
	position: Position;
}

interface MenuLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	$active: boolean;
}

interface MenuButtonIconProps extends WithClassName {
	icon: string | ReactNode;
	direction?: 'left' | 'right';
}

const StyledMenu = styled(Menu)(tw`
	relative inline-block \
	text-left
`);

const StyledItems = styled(Menu.Items)<{ position: Position }>`
	${tw` 
		absolute sm:w-56 \ 
		mt-2 \ 
		bg-gray-50 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 \ 
		backdrop-filter backdrop-blur-sm \ 
		border border-gray-100 dark:border-gray-500 \ 
		rounded-md shadow-lg \ 
		divide-y divide-gray-100 dark:divide-gray-500 \ 
		focus:outline-none 
	`}

	width: calc(100vw - 1rem);

	${({ position }) => {
		switch (position) {
			default:
			case 'top-left':
				return tw`origin-top-left left-0`;
			case 'top-right':
				return tw`origin-top-right right-0`;
		}
	}}
`;

const MenuSection = styled.div(tw`
	py-2
`);

const StyledMenuItem = styled.a<Pick<MenuLinkProps, '$active'>>`
	${tw`
		flex items-center \
		px-4 py-3 \
		text-sm font-medium tracking-wide \
		cursor-pointer \
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

const LeftIcon = styled(Icon)(tw`
	w-5 h-5 \
	mr-3
`);

const RightIcon = styled(Icon)(tw`
	w-4 h-4 \
	ml-3
`);

function MenuButtonIcon({ className, icon, direction: type = 'left' }: MenuButtonIconProps) {
	if (typeof icon !== 'string') return <>{icon}</>;

	if (type === 'right') return <RightIcon className={className} icon={icon} aria-hidden="true" />;

	return <LeftIcon className={className} icon={icon} aria-hidden="true" />;
}

/**
 * Menu Link
 *
 * @see https://headlessui.dev/react/menu#integrating-with-next-js
 */
function MenuLink({ children, href, onClick, ...rest }: MenuLinkProps) {
	return (
		<Link href={href} passHref>
			<StyledMenuItem onClick={(...args) => onClick(...args)} {...rest}>
				{children}
			</StyledMenuItem>
		</Link>
	);
}

export function Dropdown({ children, items, position }: StandardProps) {
	return (
		<StyledMenu as="div">
			{({ open }) => (
				<>
					<Menu.Button as={Fragment}>{children}</Menu.Button>

					<Transition show={open}>
						<StyledItems position={position}>
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
																onClick={() => item.onClick()}
															>
																<MenuButtonIcon icon={item.icon} />
																{item.text}
																{item.endIcon && (
																	<>
																		<MenuItemSpacer />
																		<MenuButtonIcon
																			direction="right"
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
																	href={item.href}
																	rel="noopener noreferrer"
																	target="_blank"
																>
																	<MenuButtonIcon
																		icon={item.icon}
																	/>
																	{item.text}
																	<MenuItemSpacer />
																	<MenuButtonIcon
																		direction="right"
																		icon="feather:external-link"
																	/>
																</StyledMenuItem>
															);

														return (
															<MenuLink
																$active={active}
																href={item.href}
															>
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
				</>
			)}
		</StyledMenu>
	);
}

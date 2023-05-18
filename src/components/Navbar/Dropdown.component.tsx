import clsx from 'clsx';
import Link from 'next/link';
import { forwardRef, Fragment } from 'react';
import { Icon } from '@iconify/react';
import { Menu, Transition } from '@headlessui/react';

import { NavigationItemType, WithChildren, WithClassName } from '~/types';

import type { AnchorHTMLAttributes, ReactNode } from 'react';

import type { NavigationItems } from '~/types';

type Position = 'top-left' | 'top-right';

interface StandardProps extends WithChildren {
	items: NavigationItems;
	position: Position;
}

interface MenuLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	active: boolean;
}

interface MenuButtonIconProps extends WithClassName {
	icon: string | ReactNode;
	direction?: 'left' | 'right';
}

const StyledMenuItem = forwardRef<HTMLAnchorElement, MenuLinkProps>(function StyledMenuItem(
	{ active, children, className, ...rest },
	ref,
) {
	return (
		<a
			className={clsx(
				'flex items-center px-4 py-3 text-sm font-medium tracking-wide cursor-pointer default-transition',
				active
					? 'bg-gray-100/50 text-gray-900 dark:bg-gray-700/50 dark:text-white'
					: 'text-gray-400 hover:text-gray-700 dark:hover:text-white',
				className,
			)}
			ref={ref}
			{...rest}>
			{children}
		</a>
	);
});

function MenuButtonIcon({
	className,
	icon,
	direction: type = 'left',
}: MenuButtonIconProps): JSX.Element {
	if (typeof icon !== 'string') return <>{icon}</>;

	if (type === 'right')
		return <Icon aria-hidden="true" className={clsx('w-4 h-4 ml-3', className)} icon={icon} />;

	return <Icon aria-hidden="true" className={clsx('w-5 h-5 mr-3', className)} icon={icon} />;
}

/**
 * Menu Link
 *
 * @see https://headlessui.dev/react/menu#integrating-with-next-js
 */
function MenuLink({ children, href, onClick, ...rest }: MenuLinkProps): JSX.Element {
	return (
		<Link href={href} passHref>
			<StyledMenuItem onClick={(...args): void => onClick(...args)} {...rest}>
				{children}
			</StyledMenuItem>
		</Link>
	);
}

export function Dropdown({ children, items, position = 'top-left' }: StandardProps): JSX.Element {
	return (
		<Menu as="div" className="relative inline-block text-left">
			{({ open }): JSX.Element => (
				<>
					<Menu.Button as={Fragment}>{children}</Menu.Button>

					<Transition
						appear={true}
						enter="transition ease-in-out"
						enterFrom="transform scale-95 opacity-0"
						enterTo="transform scale-100 opacity-100"
						leave="transition ease-in-out"
						leaveFrom="transform scale-100 opacity-100"
						leaveTo="transform scale-95 opacity-0"
						show={open}>
						<Menu.Items
							className={clsx(
								'absolute w-[calc(100vw-1rem)] sm:w-56 mt-2 bg-gray-50 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 backdrop-filter backdrop-blur-sm border border-gray-100 dark:border-gray-500 rounded-md shadow-lg divide-y divide-gray-100 dark:divide-gray-500 focus:outline-none',
								position === 'top-left' && 'origin-top-left left-0',
								position === 'top-right' && 'origin-top-right right-0',
							)}>
							{items.map((section, index) => (
								<div className="py-2" key={index}>
									{section.map((item, j) => (
										<Menu.Item key={j}>
											{({ active }): JSX.Element => {
												switch (item.type) {
													case NavigationItemType.ACTION:
														return (
															<StyledMenuItem
																active={active}
																className="group"
																onClick={(): void =>
																	item.onClick()
																}>
																<MenuButtonIcon icon={item.icon} />
																{item.text}
																{item.endIcon && (
																	<>
																		<span className="flex-1" />
																		<MenuButtonIcon
																			direction="right"
																			icon={item.endIcon}
																		/>
																	</>
																)}
															</StyledMenuItem>
														);
													case NavigationItemType.DIVIDER:
														return (
															<hr className="mt-2 pb-2 border-gray-100 dark:border-gray-500" />
														);
													case NavigationItemType.LINK:
														const external = item.external ?? false;
														if (external)
															return (
																<StyledMenuItem
																	className="group"
																	active={active}
																	href={item.href}
																	rel="noopener noreferrer"
																	target="_blank">
																	<MenuButtonIcon
																		icon={item.icon}
																	/>
																	{item.text}
																	<span className="flex-1" />
																	<MenuButtonIcon
																		direction="right"
																		icon="feather:external-link"
																	/>
																</StyledMenuItem>
															);

														return (
															<MenuLink
																active={active}
																href={item.href}>
																<MenuButtonIcon icon={item.icon} />
																{item.text}
															</MenuLink>
														);
												}
											}}
										</Menu.Item>
									))}
								</div>
							))}
						</Menu.Items>
					</Transition>
				</>
			)}
		</Menu>
	);
}

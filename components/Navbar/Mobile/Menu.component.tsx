import Link from 'next/link';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { css } from '@emotion/react';
import { Disclosure } from '@headlessui/react';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';

import { NavigationItemType } from '~/types';

import type { ReactNode } from 'react';

import type { NavigationItems } from '~/types';

interface MenuProps {
	items: NavigationItems;
}

interface MenuButtonIconProps {
	icon: string | ReactNode;
}

const StyledDisclosurePanel = styled(Disclosure.Panel)(tw`sm:hidden px-3`);

const ItemsContainer = styled.div(tw`
	space-y-4 \
	px-2 pt-2 pb-3
`);

const ItemStyles = css`
	${tw`
		flex items-center justify-center \
		px-3 py-3 \
		bg-gray-50 bg-opacity-75 hover:bg-gray-100 dark:bg-gray-900 dark:bg-opacity-75 dark:hover:bg-gray-800 \
		backdrop-filter backdrop-blur-sm \
		text-gray-600 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200 \
		border border-gray-100 dark:border-gray-500 \
		rounded-lg cursor-pointer \
		text-base text-center font-medium \
		transition ease-in-out duration-300
	`}
`;

const ItemLink = styled.a<{ $active: boolean }>`
	${ItemStyles}

	${({ $active }) =>
		$active &&
		tw`
				bg-gray-100 bg-opacity-75 hover:bg-gray-200 dark:bg-gray-700 dark:bg-opacity-75 dark:hover:bg-gray-600 \
				text-gray-700 hover:text-gray-800 dark:text-white dark:hover:text-gray-100 \
				outline-none ring-2 ring-offset-2 ring-primary-500
			`}
`;

const ItemButton = styled.button`
	${ItemStyles}
	${tw`
		w-full
	`}
`;

const StyledIcon = styled(Icon)(tw`
	inline-flex w-4 h-4 mr-3
`);

function MenuIcon({ icon }: MenuButtonIconProps) {
	if (typeof icon !== 'string') return <>{icon}</>;

	return <StyledIcon icon={icon} aria-hidden="true" />;
}

export function Menu({ items }: MenuProps) {
	const router = useRouter();

	return (
		<StyledDisclosurePanel>
			<ItemsContainer>
				{items.map((section) =>
					section.map((item) => {
						switch (item.type) {
							case NavigationItemType.ACTION:
								return (
									<ItemButton onClick={item.onClick}>
										<MenuIcon icon={item.icon} />
										{item.text}
									</ItemButton>
								);
							case NavigationItemType.LINK:
								const active = router.pathname === item.href;
								const external = item.external ?? false;

								if (external)
									return (
										<ItemLink $active={active}>
											<MenuIcon icon={item.icon} />
											{item.text}
										</ItemLink>
									);

								return (
									<Link
										aria-current={active ? 'page' : undefined}
										href={item.href}
										key={item.text}
									>
										<ItemLink $active={active}>
											<MenuIcon icon={item.icon} />
											{item.text}
										</ItemLink>
									</Link>
								);
						}
					}),
				)}
			</ItemsContainer>
		</StyledDisclosurePanel>
	);
}

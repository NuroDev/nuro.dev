import Link from 'next/link';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Disclosure } from '@headlessui/react';
import { useRouter } from 'next/router';

import type { NavigationItems } from '~/types';
import { Icon } from '@iconify/react';

interface MenuProps {
	items: NavigationItems;
}

const StyledDisclosurePanel = styled(Disclosure.Panel)(tw`sm:hidden px-3`);

const Item = styled.a<{ $current: boolean }>`
	${tw`
		block \
		px-3 py-3 \
		bg-gray-100 bg-opacity-25 hover:bg-gray-100 dark:bg-gray-800 dark:bg-opacity-25 dark:hover:bg-gray-700 \
		backdrop-filter backdrop-blur-sm saturate-200 \
		text-gray-600 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200 \
		border border-gray-100 dark:border-gray-500 \
		rounded-lg \
		text-base text-center font-medium
	`}

	${({ $current }) =>
		$current &&
		tw`bg-gray-100 bg-opacity-75 hover:bg-gray-200 dark:bg-gray-700 dark:bg-opacity-75 dark:hover:bg-gray-600 \
		text-gray-700 hover:text-gray-800 dark:text-white dark:hover:text-gray-100`}
`;

const StyledIcon = styled(Icon)(tw`
	inline-flex w-4 h-4 mr-3
`);

export function Menu({ items }: MenuProps) {
	const router = useRouter();

	return (
		<StyledDisclosurePanel>
			<div tw="px-2 pt-2 pb-3 space-y-1">
				{items.map(({ path, icon, name }) => {
					const active = router.pathname === path;

					return (
						<Link key={name} href={path} aria-current={active ? 'page' : undefined}>
							<Item $current={active}>
								<StyledIcon icon={icon} />
								{name}
							</Item>
						</Link>
					);
				})}
			</div>
		</StyledDisclosurePanel>
	);
}

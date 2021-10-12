import Link from 'next/link';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Disclosure } from '@headlessui/react';

import type { NavigationItems } from '~/types';
import { Icon } from '@iconify/react';

interface MenuProps {
	items: NavigationItems;
}

const StyledDisclosurePanel = styled(Disclosure.Panel)(tw`sm:hidden`);

const Item = styled.a<{ $current: boolean }>`
	${tw`
		block \
		px-3 py-2 \
		bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 \
		text-gray-300 hover:text-gray-700 dark:hover:text-white \
		rounded-md \
		text-base text-center font-medium
	`}

	${({ $current }) =>
		$current &&
		tw`bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 \
		text-gray-400 hover:text-gray-500 dark:text-white dark:hover:text-gray-100`}
`;

const StyledIcon = styled(Icon)(tw`
	inline-flex w-4 h-4 mr-3
`);

export function Menu({ items }: MenuProps) {
	return (
		<StyledDisclosurePanel>
			<div tw="px-2 pt-2 pb-3 space-y-1">
				{items.map(({ current, href, icon, name }) => (
					<Link key={name} href={href} aria-current={current ? 'page' : undefined}>
						<Item $current={current}>
							<StyledIcon icon={icon} />
							{name}
						</Item>
					</Link>
				))}
			</div>
		</StyledDisclosurePanel>
	);
}

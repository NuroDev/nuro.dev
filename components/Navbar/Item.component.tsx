import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Icon } from '@iconify/react';

import { Navbar } from '..';
import { WithChildren } from '~/types';

interface ItemProps extends WithChildren {
	active: boolean;
	href: string;
	tooltip?: string;
}

export const NavbarIcon = styled(Icon)(tw`w-4 h-4 my-1`);

const ItemContainer = styled.a<Pick<ItemProps, 'active'>>`
	${tw`
		relative inline-block \
		px-3 py-2 \
		bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 \
		text-gray-300 hover:text-gray-700 dark:hover:text-white \
		rounded-lg cursor-pointer \
		text-sm font-medium \
		transition ease-in-out duration-300
	`}

	${({ active }) =>
		active &&
		tw`bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 \
		text-gray-400 hover:text-gray-500 dark:text-white dark:hover:text-gray-100`}
`;

export function Item({ active, children, tooltip }: ItemProps) {
	return (
		<ItemContainer className="group" active={active}>
			{children}
			{tooltip && <Navbar.Tooltip>{tooltip}</Navbar.Tooltip>}
		</ItemContainer>
	);
}

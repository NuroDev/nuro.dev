import Link from 'next/link';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Icon } from '@iconify/react';

import { Button, Navbar, Tooltip } from '..';
import { NavigationItem } from '~/types';

interface ItemProps extends NavigationItem {
	active: boolean;
	tooltip?: string;
}

export const NavbarIcon = styled(Icon)(tw`w-4 h-4 my-1`);

const StyledButton = styled(Button.Icon)<Pick<ItemProps, 'active'>>`
	${({ active }) =>
		active &&
		tw`bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 \
		text-gray-400 hover:text-gray-500 dark:text-white dark:hover:text-gray-100`}
`;

export function Item({ active, name, icon, path, tooltip }: ItemProps) {
	return (
		<Tooltip text={tooltip}>
			<Link
				aria-current={active ? 'page' : undefined}
				aria-label={name}
				href={path}
				key={name}
			>
				<StyledButton className="group" active={active}>
					<Navbar.Icon icon={icon} />
				</StyledButton>
			</Link>
		</Tooltip>
	);
}

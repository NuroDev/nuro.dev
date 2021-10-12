import Link from 'next/link';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Icon } from '@iconify/react';
import { useSound } from 'use-sound';

import { Navbar } from '..';
import { NavigationItem } from '~/types';

interface ItemProps extends NavigationItem {
	active: boolean;
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

export function Item({ active, name, icon, path, tooltip }: ItemProps) {
	const [play] = useSound('/sounds/click.ogg', {
		volume: 0.25,
	});

	return (
		<Link aria-current={active ? 'page' : undefined} aria-label={name} href={path} key={name}>
			<ItemContainer className="group" active={active} onClick={() => play()}>
				<Navbar.Icon icon={icon} />
				{tooltip && <Navbar.Tooltip>{tooltip}</Navbar.Tooltip>}
			</ItemContainer>
		</Link>
	);
}

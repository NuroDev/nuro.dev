import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Icon } from '@iconify/react';

import { WithChildren } from '~/types';

interface ItemProps extends WithChildren {
	$current: boolean;
	href: string;
	tooltip?: string;
}

export const NavbarIcon = styled(Icon)(tw`w-4 h-4 my-1`);

const ItemContainer = styled.a<Pick<ItemProps, '$current'>>`
	${tw`
		relative inline-block \
		px-3 py-2 \
		bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 \
		text-gray-300 hover:text-gray-700 dark:hover:text-white \
		rounded-lg cursor-pointer \
		text-sm font-medium \
		transition ease-in-out duration-300
	`}

	${({ $current }) =>
		$current &&
		tw`bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 \
		text-gray-400 hover:text-gray-500 dark:text-white dark:hover:text-gray-100`}
`;

const TooltipContainer = styled.div(tw`
	absolute top-full -left-1/2 z-10 \
	mt-3 ml-2 px-4 py-2 \
	bg-transparent \
	border border-gray-100 dark:border-gray-500 \
	text-gray-800 dark:text-white text-center text-xs \
	rounded-lg pointer-events-none \
	opacity-0 group-hover:opacity-100 \
	transition ease-in-out delay-300 duration-300
`);

const TooltipIcon = styled(Icon)(tw`
	absolute text-black h-2 w-full left-0 top-full
`);

export function Item({ $current, children, tooltip }: ItemProps) {
	return (
		<ItemContainer className="group" $current={$current}>
			{children}
			{tooltip && (
				<TooltipContainer>
					<TooltipIcon icon="feaher:chevron-up" />
					{tooltip}
				</TooltipContainer>
			)}
		</ItemContainer>
	);
}

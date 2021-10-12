import styled from '@emotion/styled';
import { Icon } from '@iconify/react';
import tw from 'twin.macro';

import type { WithChildren, WithClassName } from '~/types';

interface TooltipProps extends WithClassName, WithChildren {}

export const Container = styled.div(tw`
	absolute top-full -left-1/2 z-10 \
	mt-3 ml-2 px-4 py-2 \
	bg-gray-100 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50 backdrop-filter backdrop-blur-sm \
	border border-gray-100 dark:border-gray-500 \
	text-gray-400 dark:text-white text-center text-xs \
	rounded-lg pointer-events-none select-none \
	opacity-0 group-hover:opacity-100 \
	transition ease-in-out delay-200 duration-300
`);

const StyledIcon = styled(Icon)`
	${tw`
		absolute left-0 bottom-full w-full h-4 \
		text-gray-100 dark:text-gray-500
	`}

	margin-bottom: -0.325rem;
`;

export function Tooltip({ children, className }: TooltipProps) {
	return (
		<Container className={className}>
			<StyledIcon icon="feather:chevron-up" />
			{children}
		</Container>
	);
}

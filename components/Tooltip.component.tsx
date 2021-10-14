import styled from '@emotion/styled';
import tw from 'twin.macro';

import type { ReactNode } from 'react';

import type { WithChildren } from '~/types';

type Direction = 'top' | 'bottom' | 'left' | 'right';

interface TooltipProps extends WithChildren {
	direction?: Direction;
	element?: () => ReactNode;
	text?: string;
}

const Container = styled.div(tw`
	relative flex items-center
`);

const TextContainer = styled.div(tw`
	absolute z-10 \
	mt-2 -ml-2.5 px-4 py-2 \
	bg-gray-50 dark:bg-gray-900  \
	border border-gray-100 dark:border-gray-500 \
	text-gray-400 dark:text-white \
	text-center text-xs font-medium tracking-wide whitespace-nowrap \
	rounded-lg pointer-events-none select-none \
	opacity-0 group-hover:opacity-100 \
	transition ease-in-out delay-200 duration-300
`);

function flipDirectionStyle(direction: Direction): Direction {
	switch (direction) {
		case 'top':
			return 'bottom';
		case 'bottom':
			return 'top';
		case 'left':
			return 'right';
		case 'right':
			return 'left';
	}
}

export function Tooltip({ children, direction = 'bottom', element, text }: TooltipProps) {
	if (!element && !text) return null;

	return (
		<Container className="group">
			<TextContainer
				style={{
					[flipDirectionStyle(direction)]: '100%',
				}}>
				{element ? element() : text ?? null}
			</TextContainer>
			{children}
		</Container>
	);
}

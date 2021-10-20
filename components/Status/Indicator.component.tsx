import styled from '@emotion/styled';
import tw from 'twin.macro';
import TailwindColors from 'tailwindcss/colors';

import type { WithClassName } from '~/types';

interface IndicatorProps extends WithClassName {
	color?: string;
	pulse?: boolean;
}

const Container = styled.span(tw`
	relative inline-flex justify-center items-center w-5 h-5 \
	mr-3
`);

const Content = styled.span(tw`
	absolute flex h-3 w-3
`);

const AnimatedPing = styled.span<{ color: string }>`
	${tw`
		absolute inline-flex w-full h-full \
		opacity-75 rounded-full \
		animate-ping
	`}

	/* TODO: Find a way to switch to using template literals from Tailwind */
	background-color: ${({ color }) => TailwindColors[color]['400']};
`;

const Dot = styled.span<{ color: string }>`
	${tw`
		relative inline-flex w-3 h-3 \
		rounded-full
	`}

	/* TODO: Find a way to switch to using template literals from Tailwind */
	background-color: ${({ color }) => TailwindColors[color]['500']};
`;

export function Indicator({ className, color = 'gray', pulse = false }: IndicatorProps) {
	return (
		<Container className={className}>
			<Content>
				{pulse && <AnimatedPing color={color} />}
				<Dot color={color} />
			</Content>
		</Container>
	);
}

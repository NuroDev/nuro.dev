import styled from '@emotion/styled';
import { AnchorHTMLAttributes } from 'react';
import tw from 'twin.macro';

interface StandardPillProps extends AnchorHTMLAttributes<HTMLDivElement> {
	small?: boolean;
}

const Container = styled.div<{ small: boolean }>`
	${tw`
		inline-flex justify-center w-full sm:w-auto \
		bg-primary-500 bg-opacity-15 \
		backdrop-filter backdrop-blur-sm saturate-200 \
		rounded-lg \
		text-sm text-primary-500
	`}

	${({ small }) => (small ? tw`px-2 py-1` : tw`px-4 py-2`)}
`;

export function Standard({ children, small = false, ...rest }: StandardPillProps) {
	return (
		<Container small={small} target="_blank" rel="noreferrer noopener" {...rest}>
			{children}
		</Container>
	);
}

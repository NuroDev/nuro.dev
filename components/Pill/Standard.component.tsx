import styled from '@emotion/styled';
import { AnchorHTMLAttributes } from 'react';
import tw from 'twin.macro';

interface StandardPillProps extends AnchorHTMLAttributes<HTMLDivElement> {}

const Container = styled.div(tw`
	inline-flex \
	px-3 lg:px-5 py-2 md:pb-4 \
	bg-primary-500 bg-opacity-15 \
	backdrop-filter backdrop-blur-sm saturate-200 \
	text-primary-200 \
	rounded-2xl \
	transition ease-in-out duration-300 \
	focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500
`);

export function Standard({ children, ...rest }: StandardPillProps) {
	return (
		<Container target="_blank" rel="noreferrer noopener" {...rest}>
			{children}
		</Container>
	);
}

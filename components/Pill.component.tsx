import styled from '@emotion/styled';
import tw from 'twin.macro';

import type { WithChildren, WithClassName } from '~/types';

interface PillProps extends WithClassName, WithChildren {
	href: string;
}

const Container = styled.a(tw`
	inline-flex \
	mt-8 lg:ml-2 px-3 lg:px-5 py-2 md:pb-4 \
	bg-primary-500 bg-opacity-15 hover:bg-primary-800 hover:bg-opacity-15 \
	backdrop-filter backdrop-blur-sm saturate-200 \
	text-primary-200 hover:text-primary-400 \
	rounded-2xl \
	transition ease-in-out duration-300
`);

export function Pill({ children, className, href }: PillProps) {
	return (
		<Container className={className} href={href} target="_blank" rel="noreferrer noopener">
			{children}
		</Container>
	);
}

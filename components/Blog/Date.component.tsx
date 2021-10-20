import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Icon } from '@iconify/react';

import type { WithChildren, WithClassName } from '~/types';

interface DateProps extends WithClassName, WithChildren {
	small?: boolean;
}

const Container = styled.div<{ small: boolean }>`
	${tw`
		inline-flex \
		bg-primary-500 bg-opacity-15 \
		rounded-lg \
		text-sm text-primary-800
	`}

	${({ small }) => (small ? tw`px-2 py-1` : tw`px-4 py-2`)}
`;

const StyledIcon = styled(Icon)(tw`
	mt-0.5 mr-3
`);

export function Date({ children, className, small = false }: DateProps) {
	return (
		<Container className={className} small={small}>
			<StyledIcon icon="feather:calendar" />
			{children}
		</Container>
	);
}

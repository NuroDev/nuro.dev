import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Icon } from '@iconify/react';

import type { WithChildren, WithClassName } from '~/types';

interface DatePillProps extends WithClassName, WithChildren {
	small?: boolean;
}

const Container = styled.div<{ small: boolean }>`
	${tw`
		inline-flex \
		bg-primary-500 bg-opacity-15 \
		backdrop-filter backdrop-blur-sm saturate-200 \
		rounded-lg \
		text-sm text-primary-500
	`}

	${({ small }) => (small ? tw`px-2 py-1` : tw`px-4 py-2`)}
`;

const StyledIcon = styled(Icon)(tw`
	mt-0.5 mr-3
`);

export function DatePill({ children, className, small = false }: DatePillProps) {
	return (
		<Container className={className} small={small}>
			<StyledIcon icon="feather:calendar" />
			{children}
		</Container>
	);
}

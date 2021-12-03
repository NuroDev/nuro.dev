import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Icon } from '@iconify/react';

import type { WithChildren, WithClassName } from '~/types';

interface DatePillProps extends WithClassName, WithChildren {
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

const StyledIcon = styled(Icon)<{ small: boolean }>`
	${tw`mt-0.5`}

	/* @TODO: Getting a "Received 'true' for a non-boolean attribute 'small'." warning here that needs fixing */
	${({ small }) => (small ? tw`mr-1.5` : tw`mr-3`)}
`;

export function DatePill({ children, className, small = false }: DatePillProps) {
	return (
		<Container className={className} small={small}>
			<StyledIcon icon="feather:calendar" small={small} />
			{children}
		</Container>
	);
}

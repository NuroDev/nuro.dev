import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Icon } from '@iconify/react';

import type { WithChildren, WithClassName } from '~/types';

interface DateProps extends WithClassName, WithChildren {}

const Container = styled.div(tw`
	inline-flex \
	px-4 py-2 \
	bg-primary-500 bg-opacity-15 \
	rounded-lg \
	text-sm text-primary-800
`);

const StyledIcon = styled(Icon)(tw`
	mt-0.5 mr-3
`);

export function Date({ children, className }: DateProps) {
	return (
		<Container className={className}>
			<StyledIcon icon="feather:calendar" />
			{children}
		</Container>
	);
}

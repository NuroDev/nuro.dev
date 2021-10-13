import styled from '@emotion/styled';
import tw from 'twin.macro';
import { format } from 'date-fns';
import { Icon } from '@iconify/react';
import { useMemo } from 'react';

import type { WithClassName } from '~/types';

interface DateProps extends WithClassName {
	date: Date;
	format?: string;
}

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

export function Date({ className, date, format: dateFormat = 'PPP' }: DateProps) {
	const formattedDate = useMemo(() => format(date, dateFormat), []);

	return (
		<Container className={className}>
			<StyledIcon icon="feather:calendar" />
			{formattedDate}
		</Container>
	);
}

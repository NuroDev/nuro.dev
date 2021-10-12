import styled from '@emotion/styled';
import tw from 'twin.macro';
import { format } from 'date-fns';
import { Icon } from '@iconify/react';
import { useMemo } from 'react';

interface DateProps {
	date: Date;
	format?: string;
}

const Container = styled.div(tw`
	px-4 py-2 \
	bg-primary-500 bg-opacity-15 \
	rounded-lg \
	text-sm text-primary-800
`);

const StyledIcon = styled(Icon)(tw`
	-mb-1 mr-3
`);

export function Date({ date, format: dateFormat = 'PPP' }: DateProps) {
	const formattedDate = useMemo(() => format(date, dateFormat), []);

	return (
		<Container>
			<StyledIcon icon="feather:calendar" />
			{formattedDate}
		</Container>
	);
}

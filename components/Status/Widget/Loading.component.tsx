import styled from '@emotion/styled';
import tw from 'twin.macro';

import { LanyardAvatarType } from '~/types';

interface LoadingTypes {
	type?: LanyardAvatarType;
}

const Container = styled.div(tw`
	flex space-x-4 w-full max-w-sm \
	mx-auto px-4 py-4 \
	bg-white bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50 \
	backdrop-filter backdrop-blur-sm \
	border-2 border-gray-200 dark:border-gray-600 \
	rounded-lg hover:shadow-lg \
	transition ease-in-out duration-300 \
	motion-safe:animate-pulse
`);

const Avatar = styled.div<{ $rounded: boolean }>`
	${tw`
		w-12 h-12 \
		my-auto \
		bg-gray-200 dark:bg-gray-600
	`}

	${({ $rounded }) => ($rounded ? tw`rounded` : tw`rounded-full`)}
`;

const LinesContainer = styled.div(tw`
	flex-1 space-y-4 py-1
`);

const Line = styled.div(tw`
	h-4 \
	rounded \
	bg-gray-200 dark:bg-gray-600
`);

export function Loading({ type }: LoadingTypes) {
	return (
		<Container>
			<Avatar $rounded={type === LanyardAvatarType.MUSIC} />
			<LinesContainer>
				<Line tw="w-3/4" />
				<Line />
			</LinesContainer>
		</Container>
	);
}

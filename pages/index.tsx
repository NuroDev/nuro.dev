import styled from '@emotion/styled';
import tw from 'twin.macro';
import { differenceInYears } from 'date-fns';

import { Button, Event, Pill, Wave } from '~/components';
import { Layout } from '~/layouts';
import { EventType } from '~/types';
import { Icon } from '@iconify/react';

const Content = styled.div(tw`h-screen flex flex-col justify-center items-center \
	px-4 \
	text-center`);

const Title = styled.h1`
	${tw`text-gray-500 dark:text-white \
		text-5xl sm:text-6xl md:text-6xl lg:text-8xl \
		tracking-tight font-extrabold`}
`;

const Description = styled.p(
	tw`max-w-xs mt-4 md:mt-8 mx-auto \
		text-base text-gray-300 sm:text-lg md:text-xl md:max-w-3xl`,
);

const LineBreak = styled.br(tw`
	hidden sm:block
`);

const StyledPill = styled(Pill)(tw`
	mt-4 sm:mt-8 lg:ml-2 md:pb-4
`);

const Actions = styled.div(tw`
	flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-4 sm:space-y-0 w-full \
	mt-8 sm:mt-4
`);

const ActionIcon = styled(Icon)(tw`
	mr-3
`);

const ActionText = styled.span(tw`
	-mt-1 py-1
`);

export default function HomePage() {
	const age = differenceInYears(new Date(), new Date('1997-08-09'));

	const today = new Date();
	const birthday = new Date('1997-08-09');
	const isBirthday =
		today.getDate() === birthday.getDate() && today.getMonth() === birthday.getMonth();

	return (
		<Layout.Default>
			{isBirthday && <Event event={EventType.BIRTHDAY} />}
			<Content>
				<Title>
					Hey <Wave>👋</Wave> I'm Ben,
					<LineBreak /> a{' '}
					<StyledPill href="https://twitter.com/nurodev">developer</StyledPill>
				</Title>
				<Description>I am a {age} year old software engineer & games developer</Description>

				<Actions>
					<Button.Outline href="https://twitter.com/nurodev">
						<ActionIcon icon="feather:twitter" />
						<ActionText>Twitter</ActionText>
					</Button.Outline>
					<Button.Outline href="https://github.com/nurodev">
						<ActionIcon icon="feather:github" />
						<ActionText>GitHub</ActionText>
					</Button.Outline>
				</Actions>
			</Content>
		</Layout.Default>
	);
}

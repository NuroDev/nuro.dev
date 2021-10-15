import styled from '@emotion/styled';
import tw from 'twin.macro';
import { differenceInYears } from 'date-fns';

import { Event, Pill, Wave } from '~/components';
import { Layout } from '~/layouts';
import { EventType } from '~/types';

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

const StyledLineBreak = styled.br(tw`hidden sm:block`);

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
					<StyledLineBreak /> a <Pill href="https://twitter.com/nurodev">developer</Pill>
				</Title>
				<Description>I am a {age} year old software engineer & games developer</Description>
			</Content>
		</Layout.Default>
	);
}

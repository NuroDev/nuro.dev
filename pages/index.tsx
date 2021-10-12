import styled from '@emotion/styled';
import tw from 'twin.macro';
import { differenceInYears } from 'date-fns';

import { Layout } from '~/layouts';
import { Wave } from '~/components';

const Content = styled.div(tw`h-screen flex flex-col justify-center items-center \
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

export default function HomePage() {
	const age = differenceInYears(new Date(), new Date('1997-08-09'));

	return (
		<Layout.Default>
			<Content>
				<Title>
					Hey <Wave>👋</Wave> I'm Ben
				</Title>
				<Description>
					I am a {age} year old full-stack developer & games developer.
				</Description>
			</Content>
		</Layout.Default>
	);
}
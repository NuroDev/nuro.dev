import styled from '@emotion/styled';
import tw from 'twin.macro';
import { differenceInYears, isSameDay, isSameMonth } from 'date-fns';
import { Icon } from '@iconify/react';

import { Button, Event, Pill, Transition, Wave } from '~/components';
import { EventType, NavigationItemType, WithChildren } from '~/types';
import { Layout } from '~/layouts';
import { usePersistantState } from '~/lib';

import type { NavigationItem } from '~/types';

const Container = styled.div(tw`
	min-h-screen flex items-center justify-center \
	py-12
`);

const Content = styled.div(tw`
	max-w-md sm:max-w-lg md:sm:max-w-2xl lg:sm:max-w-3xl w-full space-y-8 \
	text-center
`);

const Title = styled.h1(tw`
	text-gray-500 dark:text-white \
	text-5xl sm:text-6xl md:text-6xl lg:text-8xl \
	tracking-tight font-extrabold
`);

const Description = styled.p(tw`
	max-w-xs \
	mt-4 md:mt-8 mx-auto \
	text-base text-gray-300 sm:text-lg md:text-xl md:max-w-3xl
`);

const LineBreak = styled.br(tw`
	hidden sm:block
`);

const StyledPill = styled(Pill.Standard)(tw`
	mt-4
`);

const Actions = styled.div`
	${tw`
		flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-4 sm:space-y-0 w-full \
		mt-8 sm:mt-4
	`}

	div {
		${tw`
			w-full sm:w-auto
		`}
	}
`;

const ActionIcon = styled(Icon)(tw`
	mr-3
`);

const ActionText = styled.span(tw`
	-mt-1 py-1
`);

const ACTIONS: Array<NavigationItem> = [
	{
		type: NavigationItemType.LINK,
		href: '/blog',
		icon: <ActionIcon icon="feather:edit-3" />,
		text: 'Blog',
	},
	{
		type: NavigationItemType.LINK,
		href: '/projects',
		icon: <ActionIcon icon="feather:copy" />,
		text: 'Projects',
	},
	{
		type: NavigationItemType.LINK,
		external: true,
		href: 'https://github.com/nurodev',
		icon: <ActionIcon icon="feather:github" />,
		text: 'GitHub',
	},
];

export default function HomePage() {
	const { animations: animations } = usePersistantState().get();

	const today = new Date();
	const birthday = new Date('1997-08-09');
	const age = differenceInYears(today, birthday);
	const isBirthday = isSameDay(today, birthday) && isSameMonth(today, birthday);

	const description = `I am a ${age} year old software engineer & games developer`;

	return (
		<Layout.Default>
			{isBirthday && <Event event={EventType.BIRTHDAY} />}
			<Container>
				<Content>
					{animations ? (
						<Transition duration={1000}>
							<Title>
								Hey <Wave>👋</Wave> I&apos;m Ben, <LineBreak />a{' '}
								<StyledPill>developer</StyledPill>
							</Title>
						</Transition>
					) : (
						<Title>
							Hey <Wave>👋</Wave> I&apos;m Ben, <LineBreak />a{' '}
							<StyledPill>developer</StyledPill>
						</Title>
					)}
					{animations ? (
						<Transition delay={500} duration={1000}>
							<Description>{description}</Description>
						</Transition>
					) : (
						<Description>{description}</Description>
					)}

					<Actions>
						{ACTIONS.map((action, index) => {
							if (action.type !== NavigationItemType.LINK) return null;

							if (!animations)
								return (
									<Button.Outline key={index} href={action.href}>
										{action.icon}
										<ActionText>{action.text}</ActionText>
									</Button.Outline>
								);

							return (
								<Transition delay={1000 + index * 100} key={index} duration={1000}>
									<Button.Outline href={action.href}>
										{action.icon}
										<ActionText>{action.text}</ActionText>
									</Button.Outline>
								</Transition>
							);
						})}
					</Actions>
				</Content>
			</Container>
		</Layout.Default>
	);
}

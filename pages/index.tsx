import styled from '@emotion/styled';
import tw from 'twin.macro';
import Typed from 'typed.js';
import { differenceInYears } from 'date-fns';
import { Icon } from '@iconify/react';
import { Transition } from '@headlessui/react';
import { useEffect, useRef } from 'react';

import { Button, Event, Pill, Wave } from '~/components';
import { EventType, NavigationItemType } from '~/types';
import { Layout } from '~/layouts';

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

const StyledPill = styled(Pill)(tw`
	mt-4
`);

const ActionsTransition = styled(Transition)<{ $delayStagger: number }>`
	&.enter {
		${tw`transition ease-in-out duration-500`}

		transition-delay: ${({ $delayStagger }) => 3500 + $delayStagger}ms;
	}
	&.enterFrom {
		${tw`transform scale-95 opacity-0`}
	}
	&.enterTo {
		${tw`transform scale-100 opacity-100`}
	}
	&.leave {
		${tw`transition ease-in-out duration-500`}
	}
	&.leaveFrom {
		${tw`transform scale-100 opacity-100`}
	}
	&.leaveTo {
		${tw`transform scale-95 opacity-0`}
	}
`;

const Actions = styled.div(tw`
	flex flex-col sm:flex-row items-center justify-center sm:space-x-6 space-y-4 sm:space-y-0 w-full \
	mt-8 sm:mt-4
`);

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
	const titleRef = useRef(null);
	const titleElementsRef = useRef(null);
	const titleTyped = useRef(null);

	const descriptionRef = useRef(null);
	const descriptionTyped = useRef(null);

	const today = new Date();
	const birthday = new Date('1997-08-09');
	const age = differenceInYears(today, birthday);

	const isBirthday =
		today.getDate() === birthday.getDate() && today.getMonth() === birthday.getMonth();

	useEffect(() => {
		titleTyped.current = new Typed(titleRef.current, {
			showCursor: false,
			stringsElement: titleElementsRef.current,
			typeSpeed: 40,
		});

		descriptionTyped.current = new Typed(descriptionRef.current, {
			showCursor: false,
			startDelay: 2000,
			strings: [`I am a ${age} year old software engineer and games developer`],
			typeSpeed: 15,
		});

		return () => {
			titleTyped.current.destroy();
			descriptionTyped.current.destroy();
		};
	}, []);

	return (
		<Layout.Default>
			{isBirthday && <Event event={EventType.BIRTHDAY} />}
			<Container>
				<Content>
					<>
						<span ref={titleElementsRef}>
							<span>
								Hey <Wave>👋</Wave> I'm Ben, <LineBreak />a{' '}
								<StyledPill>developer</StyledPill>
							</span>
						</span>
						<Title ref={titleRef} />
					</>
					<Description ref={descriptionRef}></Description>
					<Actions>
						{ACTIONS.map((action, index) => {
							if (action.type !== NavigationItemType.LINK) return null;

							return (
								<ActionsTransition
									$delayStagger={index * 200}
									appear={true}
									enter="enter"
									enterFrom="enterFrom"
									enterTo="enterTo"
									key={index}
									leave="leave"
									leaveFrom="leaveFrom"
									leaveTo="leaveTo"
									show={true}>
									<Button.Outline href={action.href}>
										{action.icon}
										<ActionText>{action.text}</ActionText>
									</Button.Outline>
								</ActionsTransition>
							);
						})}
					</Actions>
				</Content>
			</Container>
		</Layout.Default>
	);
}

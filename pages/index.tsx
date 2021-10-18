import styled from '@emotion/styled';
import tw from 'twin.macro';
import Typed from 'typed.js';
import { Icon } from '@iconify/react';
import { useEffect, useRef } from 'react';

import { Button, Event, Pill, Wave } from '~/components';
import { EventType } from '~/types';
import { Layout } from '~/layouts';

const Container = styled.div(tw`
min-h-screen flex items-center justify-center \
	py-12 px-4 sm:px-6 lg:px-8
`);

const Content = styled.div(tw`
	max-w-md w-full space-y-8
`);

const Title = styled.h1(tw`
	text-gray-500 dark:text-white \
	text-5xl sm:text-6xl md:text-6xl lg:text-8xl \
	tracking-tight font-extrabold
`);

const LineBreak = styled.br(tw`
	hidden sm:block
`);

const StyledPill = styled(Pill)(tw`
	mt-4
`);

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

export default function HomePage() {
	const titleRef = useRef(null);
	const titleElementsRef = useRef(null);
	const typed = useRef(null);

	const today = new Date();
	const birthday = new Date('1997-08-09');
	const isBirthday =
		today.getDate() === birthday.getDate() && today.getMonth() === birthday.getMonth();

	useEffect(() => {
		typed.current = new Typed(titleRef.current, {
			showCursor: false,
			stringsElement: titleElementsRef.current,
			typeSpeed: 50,
		});

		return () => typed.current.destroy();
	}, []);

	return (
		<Layout.Default>
			{isBirthday && <Event event={EventType.BIRTHDAY} />}
			<Container>
				<Content>
					<>
						<span ref={titleElementsRef}>
							<span>
								Hey <Wave>👋</Wave> I'm Ben, a <LineBreak />
								<StyledPill>developer</StyledPill>
							</span>
						</span>
						<Title ref={titleRef} />
					</>
					<Actions>
						{/* <Link href="/blog"> */}
						<Button.Outline href="/blog">
							<ActionIcon icon="feather:edit-3" />
							<ActionText>Blog</ActionText>
						</Button.Outline>
						{/* </Link> */}
						{/* <Link href="/projects"> */}
						<Button.Outline href="/projects">
							<ActionIcon icon="feather:copy" />
							<ActionText>Projects</ActionText>
						</Button.Outline>
						{/* </Link> */}
						<Button.Outline external href="https://github.com/nurodev">
							<ActionIcon icon="feather:github" />
							<ActionText>GitHub</ActionText>
						</Button.Outline>
					</Actions>
				</Content>
			</Container>
		</Layout.Default>
	);
}

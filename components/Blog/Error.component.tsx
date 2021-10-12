import Link from 'next/link';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';

const Container = styled.div(tw`
	flex flex-grow min-h-full \
	pt-16 pb-12
`);

const Content = styled.div(tw`
	flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto \
	px-4 sm:px-6 lg:px-8
`);

const IconContainer = styled.div(tw`
	flex-shrink-0 flex justify-center
`);

const StyledIcon = styled(Icon)(tw`
	h-12 text-primary-500 w-auto
`);

const Body = styled.div(tw`py-4 text-center`);

const Title = styled.h1(tw`
	mt-2 \
	text-4xl font-extrabold text-gray-500 dark:text-white tracking-tight sm:text-5xl
`);

const SubTitle = styled.p(tw`
mt-4 \
text-sm font-medium text-gray-300 dark:text-gray-400
`);

const Actions = styled.div(tw`
	mt-6 flex justify-center items-center space-x-4
`);

const ActionButton = styled.button(tw`
	flex justify-center items-center h-12 px-8 py-4 \
	rounded-lg \
	text-base font-bold text-primary-300 hover:text-primary-400 \
	bg-gray-50 hover:bg-gray-100 hover:bg-opacity-50 dark:bg-gray-900 dark:hover:bg-gray-800 \
	transition ease-in-out duration-300 \
	focus:outline-none focus:ring-4 focus:ring-primary-500
`);

const ActionIcon = styled(Icon)(tw`mr-2`);

export function Error() {
	const router = useRouter();

	const goBack = router.back();

	return (
		<Container>
			<Content>
				<IconContainer>
					<StyledIcon icon="feather:alert-circle" />
				</IconContainer>
				<Body>
					<Title>No Posts Found</Title>
					<SubTitle>Sorry, we couldn’t find any blog posts ¯\_(ツ)_/¯</SubTitle>
					<Actions>
						<ActionButton onClick={() => goBack}>
							<ActionIcon icon="feather:arrow-left" />
							<span>Back</span>
						</ActionButton>
						<Link href="/blog">
							<ActionButton>
								<ActionIcon icon="feather:book" />
								<span>Blog</span>
							</ActionButton>
						</Link>
					</Actions>
				</Body>
			</Content>
		</Container>
	);
}

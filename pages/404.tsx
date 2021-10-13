import Link from 'next/link';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Icon } from '@iconify/react';
// import { useRouter } from 'next/router';

const Container = styled.div(tw`
	relative h-screen \
	pt-24 sm:pt-16 pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8
`);

const ErrorContainer = styled.div(tw`
	flex flex-grow min-h-full \
	pt-16 pb-12
`);

const Content = styled.div(tw`
	flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8
`);

const IconContainer = styled.div(tw`
	flex flex-shrink-0 justify-center
`);

const Text = styled.div(tw`
	py-4 \
	text-center
`);

const Title = styled.h1(tw`
	mt-2 \
	text-4xl font-extrabold text-gray-500 dark:text-white tracking-tight sm:text-5xl
`);

const Description = styled.p(tw`
	mt-8 \
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

// @TODO: Add back button
export default function Error() {
	return (
		<Container>
			<ErrorContainer>
				<Content>
					<IconContainer>
						<Icon icon="feather:alert-triangle" tw="h-12 text-primary-500 w-auto" />
					</IconContainer>
					<Text>
						<Title>Whoops!</Title>
						<Description>
							Looks like you took a wrong turn.
							<br />
							The page you're looking for couldn't be found.
						</Description>
						<Actions>
							<Link href="/">
								<ActionButton>
									<ActionIcon icon="feather:home" />
									<span>Home</span>
								</ActionButton>
							</Link>
						</Actions>
					</Text>
				</Content>
			</ErrorContainer>
		</Container>
	);
}

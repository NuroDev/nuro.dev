import Link from 'next/link';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';
import { Layout } from '~/layouts';
import { Button } from '..';

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

// @TODO: Add back button
export function Error() {
	return (
		<Layout.Error>
			<Container>
				<Content>
					<IconContainer>
						<StyledIcon icon="feather:alert-circle" />
					</IconContainer>
					<Body>
						<Title>No Posts Found</Title>
						<SubTitle>Sorry, we couldn’t find any blog posts ¯\_(ツ)_/¯</SubTitle>
						<Actions>
							<Link href="/">
								<Button.Standard icon="feather:home">Home</Button.Standard>
							</Link>
							<Link href="/blog">
								<Button.Standard icon="feather:book">Blog</Button.Standard>
							</Link>
						</Actions>
					</Body>
				</Content>
			</Container>
		</Layout.Error>
	);
}

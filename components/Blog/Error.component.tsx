import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Icon } from '@iconify/react';
import { Layout } from '~/layouts';
import { Button } from '..';
import { NavigationItemType } from '~/types';

interface ErrorProps {
	routeBlog?: boolean;
}

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

export function Error({ routeBlog = true }: ErrorProps) {
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
							<Button.Standard
								icon="feather:arrow-left"
								onClick={() => history.go(-1)}
								type={NavigationItemType.ACTION}
							>
								Back
							</Button.Standard>
							<Button.Standard
								href="/"
								icon="feather:home"
								type={NavigationItemType.LINK}
							>
								Home
							</Button.Standard>
							{routeBlog && (
								<Button.Standard
									href="/blog"
									icon="feather:book"
									type={NavigationItemType.LINK}
								>
									Blog
								</Button.Standard>
							)}
						</Actions>
					</Body>
				</Content>
			</Container>
		</Layout.Error>
	);
}

import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Disclosure } from '@headlessui/react';
import { useRouter } from 'next/router';

import { Mobile } from '.';
import { Button, Navbar, Tooltip } from '..';

import type { NavigationItems } from '~/types';

interface StandardProps {
	back?: boolean;
}

const navigation: NavigationItems = [
	{
		name: 'Home',
		icon: 'feather:home',
		path: '/',
	},
	{
		name: 'Blog',
		icon: 'feather:edit-3',
		path: '/blog',
	},
	{
		name: 'Projects',
		icon: 'feather:copy',
		path: '/projects',
	},
];

const StyledDisclosure = styled(Disclosure)(tw`fixed inset-0 h-24 z-10`);

const Container = styled.div(tw`
	mx-auto px-2 sm:px-6 lg:px-8
`);

const Content = styled.div(tw`
	relative flex items-center justify-center h-16
`);

const ItemsContainer = styled.div(tw`
	flex flex-1 items-center justify-center
`);

const BackContainer = styled.div(tw`
	absolute inset-0 hidden sm:block \
	m-4
`);

const StatusContainer = styled.div(tw`
	absolute hidden sm:block \
	-ml-10
`);

export function Standard({ back = false }: StandardProps) {
	const router = useRouter();

	const goBack = () => router.back();

	return (
		<StyledDisclosure as="nav">
			{({ open }) => (
				<>
					<Container>
						<Content>
							<Mobile.Button open={open} />

							{back && (
								<BackContainer>
									<div tw="flex space-x-6">
										<Tooltip text="Back">
											<Button.Icon
												aria-label="Back"
												className="group"
												onClick={goBack}>
												<Navbar.Icon icon={'feather:arrow-left'} />
											</Button.Icon>
										</Tooltip>
									</div>
								</BackContainer>
							)}

							<ItemsContainer>
								<div tw="hidden sm:block">
									<div tw="flex space-x-6">
										<StatusContainer>
											<Navbar.Status />
										</StatusContainer>

										{navigation.map(({ path, name, ...rest }) => {
											const active = router.pathname === path;

											return (
												<Navbar.Item
													active={active}
													key={name}
													name={name}
													path={path}
													tooltip={name}
													{...rest}
												/>
											);
										})}

										<Navbar.Settings />
									</div>
								</div>
							</ItemsContainer>
						</Content>
					</Container>

					<Mobile.Menu items={navigation} />
				</>
			)}
		</StyledDisclosure>
	);
}

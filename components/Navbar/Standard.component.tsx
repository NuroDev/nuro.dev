import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Disclosure } from '@headlessui/react';
import { useRouter } from 'next/router';

import { Mobile } from '.';
import { Navbar } from '..';

import type { NavigationItems } from '~/types';

const navigation: NavigationItems = [
	{
		name: 'Home',
		icon: 'feather:home',
		path: '/',
	},
	{
		name: 'Blog',
		icon: 'feather:book',
		path: '/blog',
	},
	{
		name: 'Projects',
		icon: 'feather:copy',
		path: '/projects',
	},
];

const StyledDisclosure = styled(Disclosure)(tw`fixed inset-0`);

const Container = styled.div(tw`
	max-w-4xl mx-auto px-2 sm:px-6 lg:px-8
`);

const Content = styled.div(tw`
	relative flex items-center justify-between h-16
`);

const ItemsContainer = styled.div(tw`
	flex flex-1 items-center justify-center sm:items-stretch sm:justify-start
`);

const Spacer = styled.span(tw`flex flex-1`);

export function Standard() {
	const router = useRouter();

	return (
		<StyledDisclosure as="nav">
			{({ open }) => (
				<>
					<Container>
						<Content>
							<Mobile.Button open={open} />

							<ItemsContainer>
								<div tw="hidden sm:block">
									<div tw="flex space-x-4">
										{navigation.map(({ path, name, ...rest }) => {
											const active = router.pathname.includes(path);

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
									</div>
								</div>

								<Spacer />

								<div tw="hidden sm:block">
									<div tw="flex space-x-4">
										<Navbar.Theme />
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

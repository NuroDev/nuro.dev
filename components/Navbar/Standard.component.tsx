import Link from 'next/link';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Disclosure } from '@headlessui/react';
import { useRouter } from 'next/router';

import { Mobile } from '.';
import { Navbar } from '..';

import type { NavigationItems } from '~/types';
import { Icon } from '@iconify/react';

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

	const navigation: NavigationItems = [
		{
			name: 'Home',
			icon: 'feather:home',
			href: '/',
			current: false,
		},
		{
			name: 'Blog',
			icon: 'feather:book',
			href: '/blog',
			current: false,
		},
		{
			name: 'Projects',
			icon: 'feather:copy',
			href: '/projects',
			current: false,
		},
	].map((item) => {
		if (item.href === router.asPath) item.current = true;

		return item;
	});

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
										{navigation.map(({ current, href, icon, name }) => (
											<Link
												aria-current={current ? 'page' : undefined}
												aria-label={name}
												href={href}
												key={name}>
												<Navbar.Item
													$current={current}
													href={href}
													tooltip={name}>
													<Navbar.Icon icon={icon} />
												</Navbar.Item>
											</Link>
										))}
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

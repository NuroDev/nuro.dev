import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Disclosure } from '@headlessui/react';

import { Button, Navbar } from '~/components';
import { useNavigation } from '~/lib';

const StyledDisclosure = styled(Disclosure)(tw`
	fixed top-0 left-0 w-full z-10
`);

const Container = styled.div(tw`
	mx-auto px-2 
`);

const Content = styled.div(tw`
	relative flex items-center justify-between h-16
`);

export function Standard() {
	const { menu, settings } = useNavigation();

	return (
		<StyledDisclosure as="nav">
			<Container>
				<Content>
					<Navbar.Dropdown items={menu} position="top-left">
						<Button.Icon aria-label="Menu">
							<Navbar.Icon icon="feather:menu" />
						</Button.Icon>
					</Navbar.Dropdown>
					<Navbar.Dropdown items={settings} position="top-right">
						<Button.Icon aria-label="Settings">
							<Navbar.Icon icon="feather:settings" />
						</Button.Icon>
					</Navbar.Dropdown>
				</Content>
			</Container>
		</StyledDisclosure>
	);
}

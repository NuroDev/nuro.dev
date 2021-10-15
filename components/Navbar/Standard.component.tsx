import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Disclosure } from '@headlessui/react';
import { useRouter } from 'next/router';

import { Button, Navbar, Tooltip } from '..';

import { useNavigation } from '~/lib';

interface StandardProps {
	back?: boolean;
	status?: boolean;
}

const StyledDisclosure = styled(Disclosure)(tw`fixed inset-0 h-24 z-10`);

const Container = styled.div(tw`
	mx-auto px-2 
`);

const Content = styled.div(tw`
	relative flex items-center justify-start h-16
`);

export function Standard({ back = false, status = true }: StandardProps) {
	const router = useRouter();
	const items = useNavigation();

	const goBack = () => router.back();

	return (
		<StyledDisclosure as="nav">
			{({ open }) => (
				<>
					<Container>
						<Content>
							<Navbar.Mobile.Button open={open} />

							<div tw="hidden sm:inline-flex sm:space-x-2">
								<Navbar.Desktop.Menu items={items} />

								{back && (
									<Tooltip text="Back">
										<Button.Icon
											aria-label="Back"
											className="group"
											onClick={goBack}>
											<Navbar.Icon icon={'feather:arrow-left'} />
										</Button.Icon>
									</Tooltip>
								)}
							</div>
						</Content>
					</Container>

					<Navbar.Mobile.Menu items={items} />
				</>
			)}
		</StyledDisclosure>
	);
}

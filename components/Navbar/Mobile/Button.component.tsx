import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Disclosure } from '@headlessui/react';
import { Icon } from '@iconify/react';

interface MobileButtonProps {
	open: boolean;
}

const Container = styled.div(tw`
	absolute inset-y-0 left-0 \
	flex items-center sm:hidden
`);

const StyledButton = styled(Disclosure.Button)`
	${tw`
		inline-flex items-center justify-center \
		p-2 \
		hover:bg-gray-700 \
		text-gray-400 hover:text-white \
		rounded-md \
		focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
	`}
`;

const StyledIcon = styled(Icon)(tw`w-6 h-6`);

export function Button({ open }: MobileButtonProps) {
	return (
		<Container>
			<StyledButton>
				<span tw="sr-only">Open Menu</span>
				<StyledIcon icon={open ? 'feather:x' : 'feather:menu'} aria-hidden="true" />
			</StyledButton>
		</Container>
	);
}

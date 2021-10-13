import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Disclosure } from '@headlessui/react';
import { Icon } from '@iconify/react';

interface MobileButtonProps {
	open: boolean;
}

const Container = styled.div(tw`
	absolute inset-y-0 left-0 z-20 \
	flex items-center sm:hidden
`);

const StyledButton = styled(Disclosure.Button)`
	${tw`
		inline-flex items-center justify-center \
		p-2 \
		bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 \
		text-gray-400 hover:text-gray-300 \
		rounded-lg \
		focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 dark:focus:ring-gray-500
		transition ease-in-out duration-300
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

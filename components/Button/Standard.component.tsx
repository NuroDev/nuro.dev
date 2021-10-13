import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Icon } from '@iconify/react';
import { useSound } from 'use-sound';

import type { ButtonHTMLAttributes } from 'react';

interface StandardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon?: string;
}

const Container = styled.button(tw`
	flex justify-center items-center h-12 px-8 py-4 \
	bg-gray-50 hover:bg-gray-100 hover:bg-opacity-50 dark:bg-gray-900 dark:hover:bg-gray-800 \
	text-base font-bold text-primary-300 hover:text-primary-400 \
	rounded-lg \
	transition ease-in-out duration-300 \
	focus:outline-none focus:ring-4 focus:ring-primary-500
`);

const StyledIcon = styled(Icon)(tw`mr-2`);

export function Standard({ children, icon, onClick, ...rest }: StandardProps) {
	const [play] = useSound('/sounds/click.ogg', {
		volume: 0.25,
	});

	return (
		<Container
			{...rest}
			onClick={(...args) => {
				play();
				onClick(...args);
			}}
		>
			{icon && <StyledIcon icon={icon} />}
			{children}
		</Container>
	);
}

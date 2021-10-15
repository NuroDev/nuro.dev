import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Icon } from '@iconify/react';

import { useClick } from '~/lib';

import type { ButtonHTMLAttributes } from 'react';

import type { WithClassName } from '~/types';

interface StandardProps extends ButtonHTMLAttributes<HTMLButtonElement>, WithClassName {
	icon?: string;
}

const Container = styled.button(tw`
	flex justify-center items-center h-12 px-8 py-4 \
	bg-gray-50 hover:bg-gray-100 hover:bg-opacity-50 dark:bg-gray-900 dark:hover:bg-gray-800 \
	text-base font-bold text-primary-300 hover:text-primary-400 \
	rounded-lg \
	transition ease-in-out duration-300 \
	focus:outline-none focus:ring-2 focus:ring-primary-500
`);

const StyledIcon = styled(Icon)(tw`mr-2`);

export function Standard({ children, className, icon, onClick, ...rest }: StandardProps) {
	const [play] = useClick();

	return (
		<Container
			{...rest}
			className={className}
			onClick={(...args) => {
				play();
				onClick(...args);
			}}>
			{icon && <StyledIcon icon={icon} />}
			{children}
		</Container>
	);
}

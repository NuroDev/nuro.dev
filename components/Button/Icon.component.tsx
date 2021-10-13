import styled from '@emotion/styled';
import tw from 'twin.macro';
import { useSound } from 'use-sound';

import type { ButtonHTMLAttributes } from 'react';

interface IconProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = styled.button(tw`
	relative inline-block \
	px-3 py-2 \
	bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 \
	text-gray-300 hover:text-gray-700 dark:hover:text-white \
	rounded-lg \
	text-sm font-medium \
	transition ease-in-out duration-300
	focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-100 dark:focus:ring-gray-500
`);

export function Icon({ children, className, onClick, ...rest }: IconProps) {
	const [play] = useSound('/sounds/click.ogg', {
		volume: 0.25,
	});

	return (
		<Button
			className={`group ${className}`}
			onClick={(e) => {
				play();
				onClick(e);
			}}
			{...rest}>
			{children}
		</Button>
	);
}

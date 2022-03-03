import styled from '@emotion/styled';
import tw from 'twin.macro';
import { forwardRef } from 'react';

import type { ButtonHTMLAttributes } from 'react';

interface IconProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = styled.button(tw`
	relative inline-block \
	px-3 py-2 \
	bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-700 \
	text-gray-400 hover:text-gray-700 dark:hover:text-white \
	rounded-lg \
	text-sm font-medium \
	transition ease-in-out duration-300
	focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-500
`);

export const Icon = forwardRef<HTMLButtonElement, IconProps>(function Icon(
	{ children, className, onClick, ...rest },
	ref,
) {
	return (
		<Button
			ref={ref}
			className={`group ${className}`}
			onClick={(e) => onClick && onClick(e)}
			{...rest}
		>
			{children}
		</Button>
	);
});

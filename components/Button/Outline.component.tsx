import Link from 'next/link';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Icon } from '@iconify/react';

import type { AnchorHTMLAttributes } from 'react';

import type { WithClassName } from '~/types';

interface OutlineProps extends AnchorHTMLAttributes<HTMLAnchorElement>, WithClassName {
	external?: boolean;
	icon?: string;
	small?: boolean;
}

const Container = styled.a<{ small: boolean }>`
	${tw`
		inline-flex items-center justify-center w-full sm:w-auto \
		bg-gray-50 bg-opacity-75 hover:bg-gray-100 hover:bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 dark:hover:bg-gray-800 dark:hover:bg-opacity-75 \
		backdrop-filter backdrop-blur-sm saturate-200 \
		text-gray-400 hover:text-gray-500 dark:text-primary-500 dark:hover:text-primary-400 \
		font-medium \
		border-2 border-gray-200 dark:border-gray-700 \
		rounded-lg cursor-pointer \
		transition ease-in-out duration-300 \
		focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-primary-500
	`}

	${({ small }) => (small ? tw`px-4 py-1 text-sm` : tw`px-8 py-2`)}
`;

const StyledIcon = styled(Icon)(tw`mt-1 mr-3`);

export function Outline({
	children,
	className,
	external = false,
	href,
	icon,
	onClick,
	small = false,
	...rest
}: OutlineProps) {
	return (
		<Link href={href} passHref>
			<Container
				className={className}
				href={href}
				onClick={(...args) => onClick && onClick(...args)}
				rel="noopener noreferrer"
				small={small}
				target={external ? '_blank' : undefined}
				{...rest}
			>
				{icon && <StyledIcon icon={icon} />}
				{children}
			</Container>
		</Link>
	);
}

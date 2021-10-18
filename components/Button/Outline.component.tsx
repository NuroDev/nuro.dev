import Link from 'next/link';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Icon } from '@iconify/react';

import { useClick } from '~/lib';

import type { AnchorHTMLAttributes } from 'react';

import type { WithClassName } from '~/types';

interface OutlineProps extends AnchorHTMLAttributes<HTMLAnchorElement>, WithClassName {
	external?: boolean;
	icon?: string;
}

const Container = styled.a(tw`
	inline-flex items-center justify-center w-full sm:w-auto \
	px-8 py-2 \
	bg-gray-50 bg-opacity-75 hover:bg-gray-100 dark:bg-gray-900 dark:bg-opacity-75 dark:hover:bg-gray-800 \
	backdrop-filter backdrop-blur-sm saturate-200 \
	text-primary-200 hover:text-primary-400 \
	ring-1 ring-offset-4 ring-gray-200 dark:ring-gray-500 \
	rounded-lg cursor-pointer \
	transition ease-in-out duration-300 \
	focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-primary-500
`);

const StyledIcon = styled(Icon)(tw`mt-1 mr-3`);

export function Outline({
	children,
	className,
	external = false,
	href,
	icon,
	onClick,
	...rest
}: OutlineProps) {
	const [play] = useClick();

	return (
		<Link href={href}>
			<Container
				className={className}
				href={href}
				onClick={(...args) => {
					play();
					if (onClick) onClick(...args);
				}}
				rel="noopener noreferrer"
				target={external ? '_blank' : undefined}
				{...rest}>
				{icon && <StyledIcon icon={icon} />}
				{children}
			</Container>
		</Link>
	);
}

import Link from 'next/link';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { css } from '@emotion/react';
import { Icon } from '@iconify/react';

import { NavigationItemType } from '~/types';

import type { MouseEvent } from 'react';

import type { WithChildren, WithClassName } from '~/types';

interface DefaultProps extends WithClassName, WithChildren {
	icon?: string;
}

type StandardProps =
	| ({
			type: NavigationItemType.ACTION;
			onClick: (e: MouseEvent) => void;
	  } & DefaultProps)
	| ({
			type: NavigationItemType.LINK;
			href: string;
			external?: boolean;
	  } & DefaultProps);

const ButtonStyles = css(tw`
	flex justify-center items-center h-12 px-8 py-4 \
	bg-gray-50 hover:bg-gray-100 hover:bg-opacity-50 dark:bg-gray-900 dark:hover:bg-gray-800 \
	text-base font-bold text-primary-300 hover:text-primary-400 \
	rounded-lg \
	transition ease-in-out duration-300 \
	focus:outline-none focus:ring-2 focus:ring-primary-500
`);

const ButtonContainer = styled.button(ButtonStyles);

const LinkContainer = styled.a(ButtonStyles);

const StyledIcon = styled(Icon)(tw`mr-2`);

export function Standard({ children, className, icon, ...rest }: StandardProps) {
	switch (rest.type) {
		case NavigationItemType.LINK:
			if (rest.external ?? true)
				return (
					<LinkContainer {...rest}>
						{icon && <StyledIcon icon={icon} />}
						{children}
					</LinkContainer>
				);

			return (
				<Link href={rest.href} passHref>
					<LinkContainer {...rest} href={rest.href}>
						{icon && <StyledIcon icon={icon} />}
						{children}
					</LinkContainer>
				</Link>
			);

		case NavigationItemType.ACTION:
			return (
				<ButtonContainer {...rest} type="button" onClick={(e) => rest.onClick(e)}>
					{icon && <StyledIcon icon={icon} />}
					{children}
				</ButtonContainer>
			);
	}
}

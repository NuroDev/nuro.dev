import Link from 'next/link';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { css } from '@emotion/react';
import { Icon } from '@iconify/react';

import * as Action from './Action.component';
import { ListActionType } from '~/types';

import type { ReactNode } from 'react';

import type { ListAction, WithChildren } from '~/types';

interface ItemProps extends WithChildren {
	actions?: Array<ListAction>;
	description?: string;
	icon?: string | ReactNode;
	iconColor?: string;
	title: string;
}

const Container = styled.li(tw`
	bg-gray-50 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 \
	backdrop-filter backdrop-blur-sm \
	border border-gray-100 dark:border-gray-500 \
	rounded-lg \
	transition ease-in-out duration-300
`);

const Content = styled.div(tw`
	flex flex-col sm:flex-row items-center justify-between \
	px-4 py-4 sm:px-6
`);

const MetaContainer = styled.div(tw`
	flex flex-1 items-center justify-start w-full
`);

const IconContainer = styled.div<{ color?: string }>`
	${tw`
		flex flex-shrink-0 items-center justify-center w-12 h-12
		rounded-full
	`}

	${({ color }) => {
		if (!color) return tw`bg-primary-500`;

		return css`
			background-color: ${color};
		`;
	}}
`;

const StyledIcon = styled(Icon)(tw`
	w-6 h-6 \
	text-white
`);

const Meta = styled.div(tw`
	min-w-0 flex-1 \
	px-4
`);

const Title = styled.h1(tw`
	text-gray-700 dark:text-white \
	text-lg font-bold
`);

const Description = styled.p(tw`
	flex items-center \
	mt-1 \
	text-gray-500 dark:text-gray-400 \
	text-xs
`);

const Actions = styled.div(tw`
	inline-flex items-center justify-end space-x-2 w-full sm:w-auto \
	mt-4 sm:mt-1
`);

export function Item({ actions, children, description, icon, iconColor, title }: ItemProps) {
	return (
		<Container>
			<Content>
				<MetaContainer>
					{icon &&
						(typeof icon === 'string' ? (
							<IconContainer color={iconColor}>
								<StyledIcon icon={icon} />
							</IconContainer>
						) : (
							<>{icon}</>
						))}
					<Meta>
						<Title>{title}</Title>
						{description && <Description>{description}</Description>}
					</Meta>
				</MetaContainer>

				{actions && (
					<Actions>
						{actions.map((action, index) => {
							switch (action.type) {
								case ListActionType.BUTTON:
									return (
										<Action.Button
											aria-label={action.label}
											key={index}
											onClick={action.onClick}
										>
											<span tw="sr-only">{action.label}</span>
											<Icon icon={action.icon} />
										</Action.Button>
									);
								case ListActionType.LINK:
									if (action.external ?? true)
										return (
											<Action.Link
												aria-label={action.label}
												href={action.href}
												key={index}
												onClick={action.onClick}
												rel="noopener noreferrer"
												target="_blank"
											>
												<span tw="sr-only">{action.label}</span>
												<Icon icon={action.icon} />
											</Action.Link>
										);

									return (
										<Link href={action.href} passHref>
											<Action.Link
												aria-label={action.label}
												key={index}
												onClick={action.onClick}
											>
												<span tw="sr-only">{action.label}</span>
												<Icon icon={action.icon} />
											</Action.Link>
										</Link>
									);
							}
						})}
					</Actions>
				)}
			</Content>
			{children}
		</Container>
	);
}

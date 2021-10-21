import styled from '@emotion/styled';
import toast from 'react-hot-toast';
import tw from 'twin.macro';
import { Icon } from '@iconify/react';
import { useCopyToClipboard } from 'react-use';
import { useTheme } from 'next-themes';

import TailwindCSS from '~/tailwind.config';
import { Button } from '~/components';
import { Layout } from '~/layouts';
import { Theme } from '~/types';

import type { CSSProperties } from 'react';
import type { GetStaticProps } from 'next';

import type { Referral, Referrals } from '~/types';
import { css } from '@emotion/react';

interface ReferralsProps {
	referrals?: Referrals;
}

interface ReferralCardProps {
	referral: Referral;
}

const Container = styled.div(tw`
	flex items-start sm:items-center justify-center w-full h-screen
`);

const Content = styled.div(tw`
	max-w-3xl overflow-hidden \
	py-16 sm:py-0
`);

const List = styled.ul(tw`
	flex flex-col space-y-4
`);

const ListItem = styled.li(tw`
	bg-gray-50 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 \
	backdrop-filter backdrop-blur-sm \
	border border-gray-100 dark:border-gray-500 \
	rounded-lg \
	transition ease-in-out duration-300
`);

const ListItemContainer = styled.div(tw`
	flex flex-col sm:flex-row items-start justify-center \
	px-4 py-4 sm:px-6
`);

const MetaContainer = styled.div(tw`
	flex flex-1 items-center
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
	flex items-center justify-center space-x-2 \
	mt-4 sm:mt-1 sm:pl-4
`);

const ActionButtonStyles = css(tw`
	relative inline-block w-10 h-10 \
	px-3 py-2 \
	bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-700 \
	text-gray-400 hover:text-gray-700 dark:hover:text-white \
	border border-gray-100 dark:border-gray-500 \
	rounded-lg \
	text-sm font-medium \
	transition ease-in-out duration-300
	focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-500
`);

const ActionButton = styled.button(ActionButtonStyles);
const ActionLink = styled.a`
	${ActionButtonStyles}

	svg {
		${tw`
			mt-1
		`}
	}
`;

export const getStaticProps: GetStaticProps<ReferralsProps> = async () => {
	const { default: rawReferrals } = await import('~/data/referrals.json');

	const referrals = (rawReferrals as Referrals).sort((a, b) => {
		const nameA = a.name.toUpperCase();
		const nameB = b.name.toUpperCase();

		if (nameA < nameB) return -1;
		if (nameA > nameB) return 1;
		return 0;
	});

	return {
		props: {
			referrals,
		},
	};
};

function ReferralCard({ referral }: ReferralCardProps) {
	const { theme } = useTheme();
	const [state, copyToClipboard] = useCopyToClipboard();

	const grayColors = TailwindCSS.theme.extend.colors.gray;
	const isDark = theme === Theme.DARK;
	const toastOptions = {
		style: {
			background: isDark ? grayColors[800] : grayColors[50],
			color: isDark ? grayColors[400] : grayColors[700],
			borderWidth: '1px',
			borderColor: isDark ? grayColors[500] : grayColors[100],
		} as CSSProperties,
	};

	function onCopy() {
		copyToClipboard(referral.code);

		if (state.error) {
			toast.error('Failed to copy code', toastOptions);
			return;
		}

		toast.success('Copied code', toastOptions);
	}

	return (
		<ListItem>
			<ListItemContainer>
				<MetaContainer>
					<IconContainer color={referral.color}>
						<StyledIcon icon={referral.icon} />
					</IconContainer>
					<Meta>
						<Title>{referral.name}</Title>
						<Description>{referral.description}</Description>
					</Meta>
				</MetaContainer>

				<Actions>
					<ActionLink
						aria-label={`${referral.name} homepage`}
						href={referral.url}
						rel="noopener noreferrer"
						target="_blank">
						<span tw="sr-only">Homepage</span>
						<Icon icon="feather:home" />
					</ActionLink>
					{referral.code && (
						<ActionButton aria-label="Referral code" onClick={onCopy}>
							<span tw="sr-only">Code</span>
							<Icon icon="feather:hash" />
						</ActionButton>
					)}
					<ActionLink
						aria-label="Referral link"
						href={referral.url}
						rel="noopener noreferrer"
						target="_blank">
						<span tw="sr-only">Referral Link</span>
						<Icon icon="feather:external-link" />
					</ActionLink>
				</Actions>
			</ListItemContainer>
		</ListItem>
	);
}

export default function ReferralsPage({ referrals }: ReferralsProps) {
	return (
		<Layout.Default>
			<Container>
				<Content>
					<List role="list">
						{referrals.map((referral) => (
							<ReferralCard key={referral.name} referral={referral} />
						))}
					</List>
				</Content>
			</Container>
		</Layout.Default>
	);
}

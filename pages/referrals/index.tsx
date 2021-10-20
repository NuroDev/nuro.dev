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
	flex flex-col sm:flex-row items-start \
	px-4 py-4 sm:px-6
`);

const MetaContainer = styled.div(tw`
	flex flex-1 items-center
`);

const IconContainer = styled.div(tw`
	flex flex-shrink-0 items-center justify-center w-12 h-12 \
	bg-primary-500
	rounded-full
`);

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
	flex items-center space-x-2 mt-4 sm:mt-0 sm:pl-4
`);

const ActionButton = styled(Button.Icon)(tw`
	w-10 h-10 \
	border border-gray-100 dark:border-gray-500
`);

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
					<IconContainer>
						<StyledIcon icon={referral.icon} />
					</IconContainer>
					<Meta>
						<Title>{referral.name}</Title>
						<Description>{referral.description}</Description>
					</Meta>
				</MetaContainer>

				<Actions>
					<a
						href={referral.url}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`${referral.name} homepage`}>
						<ActionButton>
							<span tw="sr-only">Homepage</span>
							<Icon icon="feather:home" />
						</ActionButton>
					</a>
					{referral.code && (
						<ActionButton aria-label="Referral code" onClick={onCopy}>
							<span tw="sr-only">Code</span>
							<Icon icon="feather:hash" />
						</ActionButton>
					)}
					<a
						href={referral.url}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Referral link">
						<ActionButton>
							<span tw="sr-only">Referral Link</span>
							<Icon icon="feather:external-link" />
						</ActionButton>
					</a>
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

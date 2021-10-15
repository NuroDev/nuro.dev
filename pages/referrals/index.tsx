import dynamic from 'next/dynamic';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Icon } from '@iconify/react';
import { useCopyToClipboard } from 'react-use';

import { Button, Pill } from '~/components';
import { Layout } from '~/layouts';

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
	flex-shrink-0
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
	const [state, copyToClipboard] = useCopyToClipboard();

	return (
		<ListItem>
			<ListItemContainer>
				<MetaContainer>
					<IconContainer>
						<Icon icon={`feather:${referral.icon}`} tw="w-6 h-6 dark:text-gray-400" />
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
						<ActionButton aria-label="Referral code">
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

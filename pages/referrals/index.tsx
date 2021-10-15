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
	flex items-center justify-center w-full h-screen
`);

const Content = styled.div(tw`
	max-w-3xl overflow-hidden
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
			<div tw="flex items-center px-4 py-4 sm:px-6">
				<div tw="min-w-0 flex flex-1 items-center">
					<div tw="flex-shrink-0">
						<Icon icon={`feather:${referral.icon}`} tw="w-6 h-6 dark:text-gray-400" />
					</div>
					<div tw="min-w-0 flex-1 px-4">
						<div>
							<p tw="text-lg font-bold text-gray-700 dark:text-white truncate">
								{referral.name}
							</p>
							<p tw="mt-1 flex items-center text-xs text-gray-500 dark:text-gray-400">
								<span>{referral.description}</span>
							</p>
						</div>
					</div>
				</div>
				<div tw="flex items-center space-x-2">
					<Button.Icon
						tw="w-10 h-10 border border-gray-100 dark:border-gray-500"
						href={referral.url}
						// onClick={() => click}
					>
						<Icon icon="feather:home" />
					</Button.Icon>
					{referral.code && (
						<Button.Icon
							tw="w-10 h-10 border border-gray-100 dark:border-gray-500"
							type="button"
							// onClick={() => copyToClipboard(referral.code)}
						>
							<Icon icon="feather:hash" />
						</Button.Icon>
					)}
					<Button.Icon
						tw="w-10 h-10 border border-gray-100 dark:border-gray-500"
						href={referral.url}
						// onClick={() => click}
					>
						<Icon icon="feather:external-link" />
					</Button.Icon>
				</div>
			</div>
		</ListItem>
	);
}

export default function ReferralsPage({ referrals }: ReferralsProps) {
	return (
		<Layout.Default>
			{/* <Container>
				{referrals.map((referral, index) => (
					<ReferralCard key={index} referral={referral} />
				))}
			</Container> */}

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

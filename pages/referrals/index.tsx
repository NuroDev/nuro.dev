import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Icon } from '@iconify/react';
import { useCopyToClipboard } from 'react-use';

import { Button, Pill } from '~/components';
import { Layout } from '~/layouts';
import { useClick } from '~/lib';

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

const CardContainer = styled.div(tw`
	flex items-center space-x-2 \
	m-2 p-4 \
	rounded-lg
	border border-gray-200 dark:border-gray-500 \
	transition ease-in-out duration-300
`);

const Spacer = styled.span(tw`flex-1`);

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
	const [click] = useClick();
	const [state, copyToClipboard] = useCopyToClipboard();

	return (
		<CardContainer>
			<h1>{referral.name}</h1>
			<Icon icon={`feather:${referral.icon}`} />
			<Spacer />
			{referral.bonus && <Pill>{referral.bonus}</Pill>}
			{referral.code && (
				<Button.Icon
					tw="w-10 h-10"
					type="button"
					onClick={() => copyToClipboard(referral.code)}>
					<Icon icon={`feather:hash`} />
				</Button.Icon>
			)}
			<Button.Icon tw="w-10 h-10" href={referral.url} onClick={() => click}>
				<Icon icon={`feather:link`} />
			</Button.Icon>

			{/* TODO: Use `react-hot-toast instead */}
			{/* {state.error
				? <p>Unable to copy value: {state.error.message}</p>
				: state.value && <p>Copied {state.value}</p>} */}

			{/* {JSON.stringify(referral, null, 4)} */}
		</CardContainer>
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
				<div tw="max-w-3xl overflow-hidden">
					<ul role="list" tw="flex flex-col space-y-4">
						{referrals.map((referral) => (
							<li
								key={referral.icon}
								tw="bg-gray-50 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 backdrop-filter backdrop-blur-sm border border-gray-100 dark:border-gray-500 rounded-lg transition ease-in-out duration-300">
								<div tw="flex items-center px-4 py-4 sm:px-6">
									<div tw="min-w-0 flex-1 flex items-center">
										<div tw="flex-shrink-0">
											<Icon icon={`feather:feather`} tw="w-10 h-10" />
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
							</li>
						))}
					</ul>
				</div>
			</Container>
		</Layout.Default>
	);
}

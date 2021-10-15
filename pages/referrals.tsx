import { Icon } from '@iconify/react';

import { Layout } from '~/layouts';

import type { GetStaticProps } from 'next';

import type { Referral, Referrals } from '~/types';

interface ReferralsProps {
	referrals?: Referrals;
}

interface ReferralCardProps {
	referral: Referral;
}

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
	return (
		<div>
			<h1>{referral.name}</h1>
			<Icon icon={`feather:${referral.icon}`} />

			{JSON.stringify(referral, null, 4)}
		</div>
	);
}

export default function ReferralsPage({ referrals }: ReferralsProps) {
	return (
		<Layout.Default>
			{referrals.map((referral, index) => (
				<ReferralCard key={index} referral={referral} />
			))}
		</Layout.Default>
	);
}

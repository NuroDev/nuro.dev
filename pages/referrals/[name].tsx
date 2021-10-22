import type { GetServerSideProps } from 'next';

import type { Referrals } from '~/types';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const { default: rawReferrals } = await import('~/data/referrals.json');
	const referrals = rawReferrals as Referrals;

	if (!params.name)
		return {
			redirect: {
				destination: '/',
				permanent: true,
			},
		};

	const paramName = Array.isArray(params.name)
		? params.name[0].toLowerCase()
		: params.name.toLowerCase();

	const result = referrals.find((referral) => {
		const referralName = referral.name.toLowerCase();

		if (referral.aliases)
			return referral.aliases.find((alias) => alias.toLowerCase() === paramName);

		return referralName === paramName;
	});

	if (result)
		return {
			redirect: {
				destination: result.url,
				permanent: true,
			},
		};

	return {
		redirect: {
			destination: '/',
			permanent: true,
		},
	};
};

export default function ReferralRedirectPage() {
	return null;
}

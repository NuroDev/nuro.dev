import referrals from '~/data/referrals.json';

import type { APIContext, GetStaticPathsResult } from 'astro';

export async function get({ params }: APIContext) {
	const { name } = params;

	const referral = referrals.find((referral) => slugify(referral.name) === name);
	if (!referral)
		throw {
			status: 404,
			message: `No ${name} referral found.`,
		};

	return Response.redirect(referral.url, 308);
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
	return referrals.map((referral) => ({
		params: {
			name: slugify(referral.name),
		},
	}));
}

const slugify = (str: string): string =>
	str
		.toLowerCase()
		.replace(/ /g, '-')
		.replace(/[^\w-]+/g, '');

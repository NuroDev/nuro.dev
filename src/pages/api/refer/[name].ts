import { getProfile } from '~/data/profile';

import type { NextRequest } from 'next/server';

import type { NextApiConfig } from '~/types/next';

export const config: NextApiConfig = {
	runtime: 'edge',
};

export default async function handler(req: NextRequest): Promise<Response> {
	if (req.method !== 'GET')
		return new Response(`Method ${req.method} Not Allowed`, {
			status: 404,
		});

	const name = req.nextUrl.searchParams.get('name');
	if (!name) return Response.redirect('/referrals');

	const profile = await getProfile();
	if (!profile.referrals || profile.referrals.length <= 0) return Response.redirect('/');

	const selectedReferral = profile.referrals.find((referral) => {
		if (referral.name.toLowerCase() === name.toLowerCase()) return referral;

		if (referral.aliases)
			return referral.aliases.find((alias) => alias.toLowerCase() === name.toLowerCase());

		return undefined;
	});
	if (!selectedReferral)
		return new Response(`No referral found for '${name}'`, {
			status: 404,
		});

	return Response.redirect(selectedReferral.url);
}

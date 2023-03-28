import { NextResponse } from 'next/server';

import { defineAppRouteHandler } from '~/utils/define';
import { getProfile } from '~/data/profile';

export const { GET, runtime } = defineAppRouteHandler<{ name: string }>({
	runtime: 'edge',
	GET: async (req, { params }) => {
		if (req.method !== 'GET')
			return new Response(`Method ${req.method} Not Allowed`, {
				status: 404,
			});

		const referralsUrl = new URL('/referrals', req.url);

		if (!params) return Response.redirect(referralsUrl);
		const { name } = params;

		const profile = await getProfile();
		if (!profile.referrals || profile.referrals.length <= 0) return Response.redirect('/');

		const selectedReferral = profile.referrals.find((referral) => {
			if (referral.name.toLowerCase() === name.toLowerCase()) return referral;

			// TODO: Re-add aliases
			// if (referral.aliases)
			// 	return referral.aliases.find((alias) => alias.toLowerCase() === name.toLowerCase());

			return undefined;
		});
		// TODO: Add error logging
		if (!selectedReferral) return NextResponse.redirect(referralsUrl);

		return Response.redirect(selectedReferral.url);
	},
});

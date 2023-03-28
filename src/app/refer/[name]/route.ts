import ronin from 'ronin';
import { z } from 'zod';

import { defineAppRouteHandler } from '~/utils/define';

import type { Referral } from '@ronin/nuro';

const GetReferralParams = z.object({
	name: z.string(),
});

export const { GET, runtime } = defineAppRouteHandler<{ name: string }>({
	runtime: 'edge',
	GET: async (request, { params }) => {
		const referralsUrl = new URL('/referrals', request.url);

		const parsedParams = GetReferralParams.safeParse(params);
		if (!parsedParams.success) return Response.redirect(referralsUrl);

		const [referral] = await ronin<[Referral]>(({ get }) => {
			get.referral = {
				where: {
					name: {
						contains: parsedParams.data.name,
					},
				},
			};
		});
		if (!referral) return Response.redirect(new URL('/', request.url));

		return Response.redirect(referral.url);
	},
});

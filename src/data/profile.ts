import ronin from 'ronin';

import type { Referrals } from '@ronin/nuro';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function getProfile() {
	const [referrals] = await ronin<[Referrals]>(({ get }) => {
		get.referrals;
	});

	return {
		referrals,
	};
}

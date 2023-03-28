import ronin from 'ronin';
import { omit } from 'radash';

import type { Metadata } from 'next';
import type { Referrals } from '@ronin/nuro';

export const metadata: Metadata = {
	title: 'referrals',
};

export default async function ReferralsPage(): Promise<JSX.Element> {
	const [referrals] = await ronin<[Referrals]>(({ get }) => {
		get.referrals = {
			orderedBy: {
				ascending: ['name'],
			},
		};
	});

	return (
		<main className="flex min-h-screen flex-col items-center justify-center">
			<div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
				<h1 className="z-10 text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
					All <span className="text-primary-600">referrals</span>
				</h1>

				<pre className="whitespace-pre-wrap">
					{JSON.stringify(
						referrals.map((referral) => omit(referral, ['id', 'ronin'])),
						null,
						4,
					)}
				</pre>
			</div>
		</main>
	);
}

import ronin from 'ronin';
import { omit } from 'radash';

import type { Events } from '@ronin/nuro';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'events',
};

export default async function EventsPage(): Promise<JSX.Element> {
	const [events] = await ronin<[Events]>(({ get }) => {
		get.events.orderedBy.descending = ['date'];
	});

	return (
		<main className="flex min-h-screen flex-col items-center justify-center">
			<div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
				<h1 className="z-10 text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
					All <span className="text-primary-600">events</span>
				</h1>

				<pre className="whitespace-pre-wrap">
					{JSON.stringify(
						events.map((event) => omit(event, ['id', 'ronin'])),
						null,
						4,
					)}
				</pre>
			</div>
		</main>
	);
}

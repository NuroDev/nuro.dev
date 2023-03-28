import Link from 'next/link';

import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'status',
};

export default function RootPage(): JSX.Element {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center">
			<div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
				<h1 className="z-10 text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
					Current <span className="text-primary-600">Status</span>
				</h1>
			</div>
		</main>
	);
}

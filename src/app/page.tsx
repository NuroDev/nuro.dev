import Link from 'next/link';

import type { UrlObject } from 'url';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'developer ─ nuro',
};

interface CardProps {
	description: string;
	href: UrlObject | __next_route_internal_types__.RouteImpl<string>;
	title: string;
}

function Card({ description, href, title }: CardProps): JSX.Element {
	return (
		<Link
			className="default-focus default-transition flex max-w-xs flex-col gap-4 rounded-xl border border-gray-100 bg-gray-800/50 p-4 text-white backdrop-blur-sm backdrop-filter hover:bg-gray-700/50 dark:border-gray-600"
			href={href}>
			<h3 className="text-2xl font-bold">{title}</h3>
			<div className="text-lg">{description}</div>
		</Link>
	);
}

export default function RootPage(): JSX.Element {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center">
			<div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
				<h1 className="z-10 text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
					Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
				</h1>
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
					<Card
						title="Status →"
						description="Just the basics - Everything you need to know to set up your database and authentication."
						href="/status"
					/>
				</div>
			</div>
		</main>
	);
}

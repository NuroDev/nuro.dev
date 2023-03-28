import Link from 'next/link';

import { StatusPill } from '~/components/Status/Pill.client';
import { getProfile } from '~/data/profile';

interface CardProps {
	description?: string;
	href: __next_route_internal_types__.RouteImpl<string>;
	title: string;
}

function Card({ href, title }: CardProps): JSX.Element {
	return (
		<Link
			className="default-focus default-transition flex w-64 flex-col gap-2 rounded-xl border border-gray-100 bg-gray-100/25 p-4 backdrop-blur-sm backdrop-filter hover:bg-gray-100/50 dark:border-gray-700 dark:bg-gray-900/25 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700/50"
			href={href}>
			<h3 className="text-2xl font-bold">{title}</h3>
			<div className="text-sm text-gray-400">{href}</div>
		</Link>
	);
}

export default async function RootPage(): Promise<JSX.Element> {
	const profile = await getProfile();

	return (
		<main className="flex min-h-screen flex-col items-center justify-center">
			<div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
				<h1 className="z-10 text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-[5rem]">
					Create <span className="text-primary-600">T3</span> App
				</h1>
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
					<Card title="Blog" href="/blog" />
					<Card title="Status" href="/status" />
				</div>
				<StatusPill className="fixed left-4 top-4" userId={profile.discordUserId} />
			</div>
		</main>
	);
}

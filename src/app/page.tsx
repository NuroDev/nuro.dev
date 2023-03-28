import Link from 'next/link';

import { profile } from '~/data/profile';
import { StatusPill } from '~/components/Status/Pill.client';

import type { NextHref } from '~/types/next';

interface CardProps {
	description?: string;
	href: NextHref;
	title: string;
}

function Card({ href, title }: CardProps): JSX.Element {
	return (
		<Link
			className="default-focus default-transition flex w-64 flex-col gap-2 rounded-xl border border-gray-100 bg-gray-100/25 p-4 backdrop-blur-sm backdrop-filter hover:bg-gray-100/50 dark:border-gray-700 dark:bg-gray-900/25 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700/50"
			href={href}
		>
			<h3 className="text-2xl font-bold">{title}</h3>
			<div className="text-sm text-gray-400">{href}</div>
		</Link>
	);
}

const links: Array<{
	label: string;
	href: NextHref;
}> = [
	{ label: 'Blog', href: '/blog' },
	{ label: 'Events', href: '/events' },
	{ label: 'Referrals', href: '/referrals' },
	{ label: 'Status', href: '/status' },
];

export default function RootPage(): JSX.Element {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center">
			<div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
				<h1 className="z-10 text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-[5rem]">
					👋 Hey, I&apos;m <span className="text-primary-600">{profile.name}</span>
				</h1>
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
					{links.map((link, i) => (
						<Card key={i} title={link.label} href={link.href} />
					))}
				</div>
				<StatusPill className="fixed left-4 top-4" />
			</div>
		</main>
	);
}

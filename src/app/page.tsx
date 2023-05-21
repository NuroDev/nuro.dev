import Link from 'next/link';
import type { NextPageProps } from '~/types/next';

export default function Home(_props: NextPageProps) {
	return (
		<main className="flex min-h-screen items-center justify-center py-12">
			<div className="flex flex-col space-y-3">
				<h1 className="text-3xl font-extrabold text-white">Hello World</h1>

				<Link
					className="default-transition default-focus rounded-lg border border-gray-600 bg-gray-800 px-3 py-2 text-center font-bold text-white hover:border-gray-500 hover:bg-gray-700"
					href="/notes"
				>
					Notes
				</Link>
			</div>
		</main>
	);
}

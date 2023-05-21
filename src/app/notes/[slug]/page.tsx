import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import type { NextPageProps } from '~/types/next';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function generateStaticParams() {
	const allPostSlugs = await readdir(join(process.cwd(), 'src', 'data', 'notes'));

	return allPostSlugs.map((slug) => ({ slug }));
}

export default async function Post({
	params,
}: NextPageProps<typeof generateStaticParams>): Promise<JSX.Element> {
	const _note = await readFile(
		join(process.cwd(), 'src', 'data', 'notes', `${params.slug}`),
		'utf-8',
	);

	return (
		<main className="flex min-h-screen items-center justify-center py-12">
			<h1>Hello {params.slug}</h1>
		</main>
	);
}
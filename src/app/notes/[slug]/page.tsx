import { readFile, readdir } from 'node:fs/promises';
import { join, parse as parsePath } from 'node:path';
import type { NextPageProps } from '~/types/next';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function generateStaticParams() {
	const allPostSlugs = await readdir(join(process.cwd(), 'src', 'data', 'notes'));

	const allPosts = await Promise.all(
		allPostSlugs.map(async (slug) => {
			const content = await readFile(
				join(process.cwd(), 'src', 'data', 'notes', `${slug}`),
				'utf-8',
			);

			return {
				slug: parsePath(slug).name,
				contents: content,
			};
		}),
	);

	return allPosts;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const generateMetadata = ({ params }: NextPageProps<typeof generateStaticParams>) => ({
	title: params.slug,
});

export default async function Post({
	params,
}: NextPageProps<typeof generateStaticParams>): Promise<JSX.Element> {
	return (
		<main className="flex min-h-screen items-center justify-center py-12">
			<h1>Hello {params.slug}</h1>
		</main>
	);
}

import type { NextPageProps } from '~/types';

interface Param {
	slug: string;
}

export async function generateStaticParams(): Promise<Array<Param>> {
	return [
		{
			slug: 'hello-world',
		},
	];
}

export default async function PostPage({
	params,
}: NextPageProps<typeof generateStaticParams, Array<Param>>): Promise<JSX.Element> {
	return (
		<>
			<h1 className="text-2xl font-bold">Blog Post Page</h1>
			<p>Params: {JSON.stringify(params)}</p>
		</>
	);
}

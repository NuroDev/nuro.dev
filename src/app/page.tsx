import Link from 'next/link';

export default function HomePage(): JSX.Element {
	return (
		<>
			<h1 className="text-2xl font-bold">Hello World</h1>

			<Link href="/blog">Go to /blog</Link>
		</>
	);
}

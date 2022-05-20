import Link from 'next/link';
import { allPosts } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';

import type { GetStaticProps } from 'next';
import type { Post } from 'contentlayer/generated';

interface BlogProps {
	posts: Array<Post>;
}

export default function Blog({ posts }: BlogProps) {
	return (
		<div className="mx-auto max-w-2xl py-16 text-center">
			{posts.map((post, idx) => (
				<div className="mb-6" key={idx}>
					<time dateTime={post.date} className="block text-sm text-slate-600">
						{format(parseISO(post.date), 'LLLL d, yyyy')}
					</time>
					<h2 className="text-lg">
						<Link href={post.url}>
							<a className="text-blue-700 hover:text-blue-900">{post.title}</a>
						</Link>
					</h2>
				</div>
			))}
		</div>
	);
}

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
	const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

	return {
		props: {
			posts,
		},
	};
};

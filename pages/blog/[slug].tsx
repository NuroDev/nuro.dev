import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

import type { GetStaticPaths, GetStaticProps } from 'next';
import type { ParsedUrlQuery } from 'querystring';
import type { Post } from 'contentlayer/generated';

interface BlogPostPathProps extends ParsedUrlQuery {
	slug: string;
}

interface BlogPostProps {
	post: Post;
}

export default function BlogPost({ post }) {
	const MDXContent = useMDXComponent(post.body.code);

	return (
		<article className="mx-auto max-w-2xl py-16">
			<div className="mb-6 text-center">
				<Link href="/">
					<a className="text-center text-sm font-bold uppercase text-blue-700">Home</a>
				</Link>
			</div>
			<div className="mb-6 text-center">
				<h1 className="mb-1 text-3xl font-bold">{post.title}</h1>
				<time dateTime={post.date} className="text-sm text-slate-600">
					{format(parseISO(post.date), 'LLLL d, yyyy')}
				</time>
			</div>
			<div className="prose">
				<MDXContent components={{}} />
			</div>
		</article>
	);
}

export const getStaticPaths: GetStaticPaths<BlogPostPathProps> = async () => {
	const paths = allPosts.map(({ url }) => url);

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps<BlogPostProps, BlogPostPathProps> = async ({
	params,
}) => {
	const post = allPosts.find(({ url }) => url === `/blog/${params.slug}`);

	return {
		props: {
			post,
		},
	};
};

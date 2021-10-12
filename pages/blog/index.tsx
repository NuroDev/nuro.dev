import matter from 'gray-matter';
import { format } from 'date-fns';
import { join } from 'path';
import { readdirSync, readFileSync } from 'fs';

import { Layout } from '~/layouts';

import type { GetStaticProps } from 'next';

import type { Post, Posts, RawPost } from '~/types';

interface BlogProps {
	posts: Posts;
}

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
	const cwd = process.cwd();
	const blogPostDir = join(cwd, 'data', 'blog');

	const years = readdirSync(blogPostDir, 'utf-8');

	const posts = years
		.map((year) => {
			const files = readdirSync(join(blogPostDir, year), 'utf-8');

			return files.map((file) => ({
				path: join(blogPostDir, year, file),
				slug: file.replace('.md', ''),
			}));
		})
		.flat()
		.map(({ path, slug }): Post => {
			const rawData = readFileSync(path, 'utf-8');
			const { data } = matter(rawData);

			const post = data as RawPost;

			return {
				banner: {
					alt: post.banner_alt,
					show: post.banner_show ?? false,
					url: post.banner,
				},
				date: {
					raw: post.date.toString(),
				},
				description: {
					raw: post.description,
					show: post.description_show ?? false,
				},
				title: {
					prefix: post.title_prefix,
					raw: post.title,
				},
				slug,
				url: ``,
			};
		});

	return {
		props: {
			posts,
		},
	};
};

export default function BlogPage({ posts }: BlogProps) {
	const deserializedPosts: Posts = posts.map((post) => {
		const date = new Date(post.date.raw);

		return {
			...post,
			date: {
				raw: new Date(date),
				readable: format(date, 'PPP'),
			},
		};
	});
	console.log('deserializedPosts', deserializedPosts);

	return (
		<Layout.Blog>
			<pre>{JSON.stringify(posts, null, 4)}</pre>
		</Layout.Blog>
	);
}

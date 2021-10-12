import matter from 'gray-matter';
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

import type { Post, Posts, RawPost } from '~/types';
import { format } from 'date-fns';

const BLOG_POSTS_DIR = join(process.cwd(), 'data', 'blog');

/**
 * Get the slugs of all available blog posts
 */
export async function getPostSlugs(): Promise<Array<string>> {
	return readdirSync(BLOG_POSTS_DIR);
}

/**
 * Get the frontmatter / metadata for a single blog post
 *
 * @param {string} slug - The file name / slug for the post
 */
export async function getPost(slug: string): Promise<Post> {
	const raw = readFileSync(join(BLOG_POSTS_DIR, `${slug}.md`), 'utf8');
	const { data } = matter(raw);

	const post = {
		banner: {
			alt: data.banner_alt,
			show: data.banner_show ?? false,
			url: data.banner,
		},
		date: {
			raw: data.date.toString(),
		},
		description: {
			raw: data.description,
			show: data.description_show ?? false,
		},
		title: {
			prefix: data.title_prefix,
			raw: data.title,
		},
		slug,
		url: `blog/${slug}`,
	} as Post;

	return post;
}

/**
 * Get the frontmatter / metadata for all blog posts
 */
export async function getPosts(sort: boolean = true) {
	const files = await getPostSlugs();

	// @TODO: Simplify by using the `getPost` function above
	const posts: Posts = files.reduce((posts, slug) => {
		const source = readFileSync(join(process.cwd(), 'data', 'blog', slug), 'utf8');
		const { data } = matter(source);
		const typedDate = data as RawPost;

		const post = {
			...data,
			date: {
				raw: typedDate.date.toString(),
				readable: format(typedDate.date, 'PPP'),
			},
			slug: slug.replace('.md', ''),
			url: `blog/${slug}`,
		} as Post;

		return [post, ...posts];
	}, []);

	if (sort) return posts.sort((a, b) => +new Date(b.date.raw) - +new Date(a.date.raw));

	return posts;
}

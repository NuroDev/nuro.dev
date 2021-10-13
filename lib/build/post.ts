import matter from 'gray-matter';
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

import type { SerialisedPost, RawPost, DeserialisedPost } from '~/types';
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
export async function getPost(slug: string): Promise<SerialisedPost> {
	const raw = readFileSync(join(BLOG_POSTS_DIR, `${slug}.md`), 'utf8');
	const { data } = matter(raw);
	const typedDate = data as RawPost;

	const formattedSlug = slug.replace('.md', '');
	const post = {
		banner: {
			alt: typedDate.banner_alt ?? null,
			show: typedDate.banner_show ?? false,
			url: typedDate.banner,
		},
		date: {
			raw: typedDate.date.toString(),
		},
		description: {
			raw: typedDate.description,
			show: typedDate.description_show ?? false,
		},
		title: {
			prefix: typedDate.title_prefix ?? null,
			raw: typedDate.title,
		},
		slug: formattedSlug,
		url: `blog/${formattedSlug}`,
	} as SerialisedPost;

	return post;
}

/**
 * Get the frontmatter / metadata for all blog posts
 */
export async function getPosts(sort: boolean = true) {
	const files = await getPostSlugs();

	const posts = files.map((slug) => {
		const source = readFileSync(join(process.cwd(), 'data', 'blog', slug), 'utf8');
		const { data } = matter(source);
		const typedDate = data as RawPost;

		const formattedSlug = slug.replace('.md', '');
		const post = {
			banner: {
				alt: typedDate.banner_alt ?? null,
				show: typedDate.banner_show ?? true,
				url: typedDate.banner,
			},
			date: {
				raw: typedDate.date.toString(),
				value: null,
				readable: format(typedDate.date, 'PPP'),
			},
			description: {
				raw: typedDate.description,
				show: typedDate.description_show ?? false,
			},
			title: {
				prefix: typedDate.title_prefix ?? null,
				raw: typedDate.title,
			},
			slug: formattedSlug,
			url: `blog/${formattedSlug}`,
		} as SerialisedPost;

		return post;
	});

	if (sort) return posts.sort((a, b) => +new Date(b.date.raw) - +new Date(a.date.raw));

	return posts;
}

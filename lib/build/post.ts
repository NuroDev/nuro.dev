import matter from 'gray-matter';
import { format } from 'date-fns';
import { join } from 'path';
import { readdirSync, readFileSync } from 'fs';

import type { Post, RawPost } from '~/types';

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
	const rawPost = data as RawPost;

	const formattedSlug = slug.replace('.md', '');
	const post = {
		banner: rawPost.banner
			? {
					alt: rawPost.banner_alt ?? null,
					show: rawPost.banner_show ?? false,
					url: rawPost.banner,
			  }
			: undefined,
		date: {
			value: rawPost.date,
			readable: format(rawPost.date, 'PPP'),
		},
		description: rawPost.description
			? {
					value: rawPost.description,
					show: rawPost.description_show ?? false,
			  }
			: undefined,
		title: {
			prefix: rawPost.title_prefix ?? null,
			value: rawPost.title,
		},
		slug: formattedSlug,
		url: `blog/${formattedSlug}`,
	} as Post;

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
				value: typedDate.date,
				readable: format(typedDate.date, 'PPP'),
			},
			description: {
				value: typedDate.description,
				show: typedDate.description_show ?? false,
			},
			title: {
				prefix: typedDate.title_prefix ?? null,
				value: typedDate.title,
			},
			slug: formattedSlug,
			url: `blog/${formattedSlug}`,
		} as Post;

		return post;
	});

	if (sort) return posts.sort((a, b) => +new Date(b.date.value) - +new Date(a.date.value));

	return posts;
}

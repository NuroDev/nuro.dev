import matter from 'gray-matter';
import { format } from 'date-fns';
import { join } from 'path';
import { readdirSync, readFileSync } from 'fs';
import { serialize } from 'next-mdx-remote/serialize';

import RehypeCodeTitles from 'rehype-code-titles';
import RehypeSlug from 'rehype-slug';
import RehypeAutoLinkHeadings from 'rehype-autolink-headings';
import RehypePrismPlus from 'rehype-prism-plus';

import type { FrontMatter, Post, RawFrontMatter } from '~/types';

const BLOG_POSTS_DIR = join(process.cwd(), 'data', 'blog');

/**
 * Get the slugs of all available blog posts
 */
export async function getAllPostSlugs() {
	return readdirSync(BLOG_POSTS_DIR);
}

/**
 * Get the frontmatter metadata for all available blog posts
 */
export async function getAllPostsFrontMatter() {
	const files = readdirSync(BLOG_POSTS_DIR);

	return files.map((slug) => {
		const source = readFileSync(join(BLOG_POSTS_DIR, slug), 'utf8');
		const { data } = matter(source);

		const frontmatter = data as RawFrontMatter;
		const trimmedSlug = slug.replace('.md', '');

		return {
			...frontmatter,
			date: format(new Date(frontmatter.date), 'PPP'),
			slug: trimmedSlug,
		} as FrontMatter;
	});
}

/**
 * Get the frontmatter metadata & post MDX contents from file
 *
 * @param {string} slug - Slug / file name of the blog post to load data from
 */
export async function getPost(slug: string): Promise<Post> {
	const raw = readFileSync(join(process.cwd(), 'data', 'blog', `${slug}.md`)).toString();
	const { content, data } = matter(raw);
	const source = await serialize(content, {
		// scope: data,
		mdxOptions: {
			rehypePlugins: [
				[
					RehypeAutoLinkHeadings,
					,
					{
						properties: {
							className: ['anchor'],
						},
					},
				],
				RehypeCodeTitles,
				RehypePrismPlus,
				RehypeSlug,
			],
		},
	});

	const frontmatter = data as RawFrontMatter;
	const trimmedSlug = slug.replace('.md', '');

	return {
		frontmatter: {
			...frontmatter,
			date: format(new Date(frontmatter.date), 'PPP'),
			slug: trimmedSlug,
		},
		source,
	};
}
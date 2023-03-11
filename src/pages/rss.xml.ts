import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

import { description, title } from '~/content/config';

import type { APIRoute } from 'astro';

export const get: APIRoute = async ({ site }) => {
	const posts = await getCollection('blog');

	return rss({
		description,
		items: posts.map((post) => ({ ...post.data, link: `/blog/${post.slug}/` })),
		site: site!.href,
		title,
	});
};

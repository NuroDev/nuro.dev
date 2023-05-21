import type { MetadataRoute } from 'next';
import { env } from '~/env';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = new URL(`https://${env.DOMAIN}`);

	const blogs = new Array<{ slug: string; publishedAt: Date }>().map((post) => ({
		url: new URL(`/notes/${post.slug}`, baseUrl).href,
		lastModified: post.publishedAt,
	}));

	const routes = ['', '/notes'].map((route) => ({
		url: new URL(route, baseUrl).href,
		lastModified: new Date().toISOString().split('T')[0],
	}));

	return [...routes, ...blogs];
}

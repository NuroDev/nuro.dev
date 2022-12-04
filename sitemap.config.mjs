// @ts-check

export function getCanonicalUrl() {
	if (process.env.DOMAIN) return `https://${process.env.DOMAIN}`;

	if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;

	return `http://localhost:${process.env.PORT ?? 3000}`;
}

const siteUrl = getCanonicalUrl();

/**
 * @type {import('next-sitemap').IConfig}
 */
const config = {
	exclude: ['/server-sitemap.xml'],
	generateRobotsTxt: true,
	robotsTxtOptions: {
		additionalSitemaps: [
			`${siteUrl}/sitemap.xml`,
		],
	},
	siteUrl,
};

export default config;

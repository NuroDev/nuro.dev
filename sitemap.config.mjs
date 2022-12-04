export function getCanonicalUrl() {
	if (process.env.DOMAIN) return `https://${process.env.DOMAIN}`;

	if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;

	if (process.env.VERCEL) return `https://${env.DOMAIN}`;

	return `http://localhost:${process.env.PORT ?? 3000}`;
}

/**
 * @type {import('next-sitemap').IConfig}
 */
const config = {
	exclude: ['/server-sitemap.xml'],
	generateRobotsTxt: true,
	robotsTxtOptions: {
		additionalSitemaps: [
			`${protocol}://${domain}/sitemap.xml`,
		],
	},
	siteUrl: `${protocol}://${domain}`,
};

export default config;

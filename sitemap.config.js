// @ts-check

const isProduction = process.env.NODE_ENV === 'production';
const protocol = isProduction ? 'https' : 'http';

/**
 * @type {import('next-sitemap').IConfig}
 */
module.exports = {
	exclude: ['/server-sitemap.xml'],
	generateRobotsTxt: true,
	robotsTxtOptions: {
		additionalSitemaps: [
			`${protocol}://${process.env.DOMAIN}/sitemap.xml`,
			`${protocol}://${process.env.DOMAIN}/server-sitemap.xml`,
		],
	},
	siteUrl: `${protocol}://${process.env.DOMAIN}`,
};

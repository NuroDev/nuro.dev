// @ts-check

/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next-sitemap').IConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next-sitemap').IConfig}}
 */
function defineSitemapConfig(config) {
	return config
}

const isProduction = process.env.NODE_ENV === 'production';

const domain = isProduction ? 'nuro.dev' : 'localhost:3000';
const protocol = `http${isProduction ? 's' : ''}`;

export default defineSitemapConfig({
	generateRobotsTxt: true,
	robotsTxtOptions: {
		additionalSitemaps: [
			`${protocol}://${domain}/sitemap.xml`,
		],
	},
	siteUrl: `${protocol}://${domain}`,
})

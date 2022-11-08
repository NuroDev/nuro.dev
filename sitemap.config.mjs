// @ts-check

import { env } from './src/env'

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

const isProduction = env.NODE_ENV === 'production';
const protocol = isProduction ? 'https' : 'http';

export default defineSitemapConfig({
	generateRobotsTxt: true,
	robotsTxtOptions: {
		additionalSitemaps: [
			`${protocol}://${env.DOMAIN}/sitemap.xml`,
		],
	},
	siteUrl: `${protocol}://${env.DOMAIN}`,
})

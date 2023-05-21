import type { MetadataRoute } from 'next';
import { env } from '~/env';
 
export default function robots(): MetadataRoute.Robots {
	const baseUrl = new URL(`https://${env.DOMAIN}`);

	return {
		rules: [
		  { userAgent: '*', },
		],
		sitemap: new URL('/sitemap.xml', baseUrl).href,
		host: baseUrl.href,
	  };
}

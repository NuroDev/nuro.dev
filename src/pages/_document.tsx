import { Head, Html, Main, NextScript } from 'next/document';

import { defaultSeo } from '~/data/seo';
import { getCanonicalUrl } from '~/utils/url';

export default function Document(): JSX.Element {
	const canonicalUrl = getCanonicalUrl();

	return (
		<Html lang="en" className="scroll-smooth antialiased">
			<Head>
				<link rel="canonical" href={canonicalUrl}></link>
				<link rel="icon" type="image/png" href="/favicon.png" />
				<meta name="msapplication-TileColor" content="#0068f5" />
				<meta name="theme-color" content="#0c0e10" />

				{/* OpenGraph */}
				<meta property="og:description" content={defaultSeo.description} />
				<meta property="og:image:alt" content={defaultSeo.openGraph.siteName} />
				<meta property="og:image:height" content="1064" />
				<meta property="og:image:width" content="1926" />
				<meta property="og:image" content={`${canonicalUrl}/banner.png`} />
				<meta property="og:site_name" content={defaultSeo.openGraph.siteName} />
				<meta property="og:title" content={defaultSeo.openGraph.title} />
				<meta property="og:type" content="website" />
				<meta property="og:url" content={canonicalUrl} />

				{/* Twitter  */}
				<meta name="twitter:card" content={defaultSeo.twitter.cardType} />
				<meta name="twitter:creator" content={defaultSeo.twitter.handle} />
				<meta name="twitter:description" content={defaultSeo.description} />
				<meta name="twitter:image" content={`${canonicalUrl}/banner.png`} />
				<meta name="twitter:site" content={defaultSeo.twitter.site} />
				<meta name="twitter:title" content={defaultSeo.openGraph.title} />
				<meta name="twitter:url" content={canonicalUrl} />
			</Head>
			<body className="bg-gray-50 text-gray-500 selection:bg-gray-900 selection:text-white dark:bg-gray-900 selection:dark:bg-white selection:dark:text-primary-500">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

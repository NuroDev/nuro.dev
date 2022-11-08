import { Inter } from '@next/font/google';

import 'nprogress/nprogress.css';

import seo from '~/data/seo.json';
// @ts-expect-error Importing CJS file
import tailwindCSS from '../../tailwind.config.cjs';
import { AnalyticsWrapper } from '~/components/Analytics.component';
import { env } from '~/env';

import '~/styles/global.css';

import type { WithChildren } from '~/types';

interface RootLayoutProps extends WithChildren {}

const inter = Inter();

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
	return (
		<html lang="en" className={inter.className}>
			<head>
				<title>developer ─ nuro</title>
				<meta name="description" content="Hey 👋 I'm Ben, a developer" />
				<link rel="icon" type="image/png" href="/favicon.png" />
				<link rel="canonical" href={env.DOMAIN}></link>
				<link rel="icon" type="image/png" href="/favicon.png" />
				<meta
					name="msapplication-TileColor"
					content={tailwindCSS.theme.extend.colors.primary[600]}
				/>
				<meta name="theme-color" content={tailwindCSS.theme.extend.colors.gray[900]} />

				{/* OpenGraph */}
				<meta property="og:description" content={seo.description} />
				<meta property="og:image" content={`${env.DOMAIN}/banner.png`} />
				<meta property="og:image:alt" content={seo.openGraph.siteName} />
				<meta property="og:image:width" content="1926" />
				<meta property="og:image:height" content="1064" />
				<meta property="og:site_name" content={seo.openGraph.siteName} />
				<meta property="og:title" content={seo.openGraph.title} />
				<meta property="og:type" content="website" />
				{/* TODO: Set to exact path. Router `asPath`? */}
				<meta property="og:url" content={env.DOMAIN} />

				{/* Twitter  */}
				<meta name="twitter:card" content={seo.twitter.cardType} />
				<meta name="twitter:creator" content={seo.twitter.handle} />
				<meta name="twitter:description" content={seo.description} />
				<meta name="twitter:image" content={`${env.DOMAIN}/banner.png`} />
				<meta name="twitter:site" content={seo.twitter.site} />
				<meta name="twitter:title" content={seo.openGraph.title} />
				<meta name="twitter:url" content={env.DOMAIN} />
			</head>
			<body className="bg-gray-50 text-gray-500 antialiased selection:bg-gray-900 selection:text-white dark:bg-gray-900 selection:dark:bg-white selection:dark:text-primary-500">
				{children}
				<AnalyticsWrapper />
			</body>
		</html>
	);
}

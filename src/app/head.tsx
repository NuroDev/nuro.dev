import seo from '~/data/seo.json';
// @ts-expect-error Importing CJS file
import tailwindCSS from '../../tailwind.config.cjs';
import { env } from '~/env';

export default function RootHead(): JSX.Element {
	return (
		<>
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
		</>
	);
}

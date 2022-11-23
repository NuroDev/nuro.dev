// @ts-expect-error Importing CJS file
import tailwindCSS from '../../tailwind.config.cjs';
import defaultSeo from '~/data/seo.json';
import { env } from '~/env';

import type { NextSeoProps } from 'next-seo';
import type { ReactNode } from 'react';

import type { NextHeadProps } from '~/types';

interface HeadProps extends NextSeoProps {}

function BaseHead({
	canonical = env.DOMAIN,
	description = defaultSeo.description,
	openGraph = {
		description: defaultSeo.description,
		siteName: defaultSeo.openGraph.siteName,
		title: defaultSeo.openGraph.title,
	},
	title = defaultSeo.title,
	titleTemplate = defaultSeo.titleTemplate,
	twitter = {
		cardType: defaultSeo.twitter.cardType,
		handle: defaultSeo.twitter.handle,
		site: defaultSeo.twitter.site,
	},
}: HeadProps): JSX.Element {
	return (
		<>
			{title && <title>{titleTemplate ? titleTemplate.replace('%s', title) : title}</title>}
			{description && <meta name="description" content={description} />}
			<link rel="canonical" href={canonical} />
			<link rel="icon" type="image/png" href="/favicon.png" />
			<meta charSet="utf-8" />
			<meta name="googlebot" content="index,follow" />
			<meta
				name="msapplication-TileColor"
				content={tailwindCSS.theme.extend.colors.primary[600]}
			/>
			<meta name="robots" content="index,follow" />
			<meta name="theme-color" content={tailwindCSS.theme.extend.colors.primary[900]} />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />

			{/* OpenGraph */}
			<meta
				property="og:description"
				content={openGraph?.description || defaultSeo.description}
			/>
			<meta property="og:image" content={`${canonical}/banner.png`} />
			<meta
				property="og:image:alt"
				content={openGraph?.site_name || defaultSeo.openGraph.siteName}
			/>
			<meta property="og:image:height" content="1064" />
			<meta property="og:image:width" content="1926" />
			<meta
				property="og:site_name"
				content={openGraph?.site_name || defaultSeo.openGraph.siteName}
			/>
			<meta property="og:title" content={openGraph?.title || defaultSeo.openGraph.title} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content={canonical} />

			{/* Twitter  */}
			<meta name="twitter:card" content={twitter?.cardType || defaultSeo.twitter.cardType} />
			<meta name="twitter:creator" content={twitter?.handle || defaultSeo.twitter.handle} />
			<meta name="twitter:description" content={defaultSeo.description} />
			<meta name="twitter:image" content={`${canonical}/banner.png`} />
			<meta name="twitter:site" content={twitter?.site || defaultSeo.twitter.site} />
			<meta name="twitter:title" content={defaultSeo.openGraph.title} />
			<meta name="twitter:url" content={canonical} />
		</>
	);
}

export function defineHead<
	TParams = Record<string, string | number | boolean>,
	TProps extends HeadProps = HeadProps,
>(
	options?: TProps | ((props: NextHeadProps<TParams>) => TProps | Promise<TProps>),
	children?: ReactNode,
): (props: NextHeadProps<TParams>) => JSX.Element | Promise<JSX.Element> {
	if (typeof options === 'function')
		return ({ params }) =>
			(async function Head(): Promise<JSX.Element> {
				return (
					<>
						<BaseHead {...await options({ params })} />
						{children}
					</>
				);
			})();

	return function Head() {
		return (
			<>
				<BaseHead {...options} />
				{children}
			</>
		);
	};
}

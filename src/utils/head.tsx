// @ts-expect-error TypeScript doesn't know how to resolve `.cts` files.
import { colors } from '~/data/theme.cts';
import { defaultSeo } from '~/data/seo';
import { getCanonicalUrl } from './url';

import type { NextSeoProps } from 'next-seo';
import type { ReactNode } from 'react';

import type { NextHeadProps } from '~/types/next';

interface HeadProps extends NextSeoProps {}

function BaseHead({
	canonical = getCanonicalUrl(),
	description = defaultSeo.description,
	openGraph,
	title = defaultSeo.title,
	titleTemplate = defaultSeo.titleTemplate,
	twitter,
}: HeadProps): JSX.Element {
	return (
		<>
			{title && <title>{titleTemplate ? titleTemplate.replace('%s', title) : title}</title>}
			{description && <meta name="description" content={description} />}
			<link rel="canonical" href={canonical} />
			<link rel="icon" type="image/png" href="/favicon.png" />
			<meta name="msapplication-TileColor" content={colors.primary[600]} />
			<meta name="theme-color" content={colors.gray[800]} />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />

			{/* OpenGraph */}
			<meta
				property="og:description"
				content={openGraph?.description || defaultSeo.description}
			/>
			<meta property="og:image:alt" content={`Opengraph banner image for ${canonical}`} />
			<meta property="og:image:height" content="1064" />
			<meta property="og:image:width" content="1926" />
			<meta property="og:image" content={`${canonical}/banner.png`} />
			<meta
				property="og:site_name"
				content={openGraph?.siteName || defaultSeo.openGraph.siteName}
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

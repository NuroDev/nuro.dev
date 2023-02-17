// @ts-expect-error TypeScript doesn't know how to resolve `.cts` files.
import { colors } from '~/data/theme.cts';
import { getSeo } from '~/data/seo';
import { getCanonicalUrl } from './url';

import type { NextSeoProps } from 'next-seo';
import type { ReactNode } from 'react';

import type { NextHeadComponent, NextHeadProps } from '~/types/next';

interface HeadProps extends NextSeoProps {}

function BaseHead({
	canonical = getCanonicalUrl(),
	description,
	openGraph,
	title,
	titleTemplate,
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
			<meta property="og:description" content={openGraph?.description} />
			<meta property="og:image:alt" content={`Opengraph banner image for ${canonical}`} />
			<meta property="og:image:height" content="1064" />
			<meta property="og:image:width" content="1926" />
			<meta property="og:image" content={`${canonical}/banner.png`} />
			<meta property="og:site_name" content={openGraph?.siteName} />
			<meta property="og:title" content={openGraph?.title} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content={canonical} />

			{/* Twitter  */}
			<meta name="twitter:card" content={twitter?.cardType} />
			<meta name="twitter:creator" content={twitter?.handle} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={`${canonical}/banner.png`} />
			<meta name="twitter:site" content={twitter?.site} />
			<meta name="twitter:title" content={title} />
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
): NextHeadComponent<TParams> {
	if (typeof options === 'function')
		return ({ params }) => {
			const Component = async function Head(): Promise<JSX.Element> {
				const defaultSeo = await getSeo();
				const { description, openGraph, title, titleTemplate, twitter, ...rest } =
					await options({
						params,
					});

				return (
					<>
						<BaseHead
							{...defaultSeo}
							description={description || defaultSeo.description}
							openGraph={{
								...defaultSeo.openGraph,
								...openGraph,
								description: description || defaultSeo.description,
								siteName: openGraph?.siteName || defaultSeo.openGraph.siteName,
								title: openGraph?.title || defaultSeo.openGraph.title,
							}}
							title={title || defaultSeo.title}
							titleTemplate={titleTemplate || defaultSeo.titleTemplate}
							twitter={{
								...defaultSeo.twitter,
								...twitter,
								cardType: twitter?.cardType || defaultSeo.twitter.cardType,
								handle: twitter?.handle || defaultSeo.twitter.handle,
								site: twitter?.site || defaultSeo.twitter.site,
							}}
							{...rest}
						/>
						{children}
					</>
				);
			};

			return Component();
		};

	return function Head() {
		return (
			<>
				<BaseHead {...options} />
				{children}
			</>
		);
	};
}

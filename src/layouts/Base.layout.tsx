import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import { defaultSeo } from '~/data/seo';
import { getCanonicalUrl } from '~/utils/url';

import type { NextSeoProps } from 'next-seo';

import type { WithChildren } from '~/types/react';

export interface BaseLayoutProps extends Omit<NextSeoProps, 'children'>, WithChildren {}

export function BaseLayout({
	children,
	description = defaultSeo.description,
	title = defaultSeo.title,
	titleTemplate = defaultSeo.titleTemplate,
	...seo
}: BaseLayoutProps): JSX.Element {
	const router = useRouter();

	const canonicalUrl = getCanonicalUrl();

	return (
		<>
			<NextSeo
				canonical={canonicalUrl}
				description={description}
				openGraph={{
					url: `${canonicalUrl}/${router.asPath}`,
				}}
				title={title}
				titleTemplate={titleTemplate}
				{...seo}
			/>
			{children}
		</>
	);
}

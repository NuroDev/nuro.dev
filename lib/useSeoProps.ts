import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { WithProps } from '~/types';

interface SeoProps extends Partial<WithProps<typeof NextSeo>> {}

const defaultSeo: SeoProps = {
	title: 'nuro ─ developer',
	description: "Hey 👋 I'm Ben, a developer",
};

export function useSeoProps(props: SeoProps = {}): SeoProps {
	const router = useRouter();

	return Object.assign(
		{
			...defaultSeo,
			canonical: `https://nuro.dev/${router.asPath}`,
			openGraph: {
				title: defaultSeo.title,
				description: defaultSeo.description,
				site_name: 'nuro',
				url: `https://nuro.dev/${router.asPath}`,
				type: 'website',
				images: [
					{
						url: '/banner.png',
						alt: defaultSeo.description,
						width: 1280,
						height: 720,
					},
				],
			},
			twitter: {
				cardType: 'summary_large_image',
				handle: '@nurodev',
				site: '@nurodev',
			},
		},
		props,
	);
}

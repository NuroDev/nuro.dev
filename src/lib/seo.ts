import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

import profile from '~/data/profile.json';
import type { Profile } from '~/types/profile';
const { alias, name, role, domain, social } = profile as unknown as Profile;

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = `${alias} ─ ${role}`;
	const description = `Hey 👋 I'm ${name}, a ${role}`;

	return {
		title,
		description,
		canonical: `https://${domain}/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: alias,
			url: `https://${domain}/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: `https://${domain}/banner.png`,
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		twitter: social.twitter && {
			cardType: 'summary_large_image',
			handle: `@${social.twitter}`,
			site: `@${social.twitter}`,
		},
		...props,
	};
}

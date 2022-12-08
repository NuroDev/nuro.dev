import { NextSeo } from 'next-seo';

import { Navbar } from '~/components';
import { useSeoProps } from '~/lib';

import type { ComponentProps, PropsWithChildren } from 'react';

import profile from '~/data/profile.json';
import type { Profile } from '~/types/profile';
const { alias } = profile as unknown as Profile;

interface BlogLayoutProps {
	seo?: Partial<ComponentProps<typeof NextSeo>>;
}

export function BlogLayout({ children, seo }: PropsWithChildren<BlogLayoutProps>): JSX.Element {
	const seoProps = useSeoProps({
		title: `${alias} ─ blog`,
		...seo,
	});

	return (
		<>
			<NextSeo {...seoProps} />
			<Navbar.Standard />
			<main className="flex flex-col justify-center sm:px-8">{children}</main>
		</>
	);
}

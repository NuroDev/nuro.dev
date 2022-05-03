import { NextSeo } from 'next-seo';

import { useSeoProps } from '~/lib/seo';

import type { WithChildren, WithProps } from '~/types';

interface BaseLayoutProps extends WithChildren {
	seo?: Partial<WithProps<typeof NextSeo>>;
}

export function BaseLayout({ children, seo }: BaseLayoutProps) {
	const seoProps = useSeoProps(seo);

	return (
		<>
			<NextSeo {...seoProps} />
			<main className="flex flex-col justify-center px-8">{children}</main>
		</>
	);
}

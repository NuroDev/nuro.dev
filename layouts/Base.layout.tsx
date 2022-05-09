import { NextSeo } from 'next-seo';

import { useSeoProps } from '~/lib/seo';

import type { WithChildren, WithClassName, WithProps } from '~/types';

interface BaseLayoutProps extends WithChildren, WithClassName {
	seo?: Partial<WithProps<typeof NextSeo>>;
}

export function BaseLayout({ children, className, seo }: BaseLayoutProps) {
	const seoProps = useSeoProps(seo);

	return (
		<>
			<NextSeo {...seoProps} />
			<main className={className}>{children}</main>
		</>
	);
}

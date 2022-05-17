import { NextSeo } from 'next-seo';
import { ElementType } from 'react';

import { useSeoProps } from '~/lib/seo';

import type { WithChildren, WithClassName, WithProps } from '~/types';

interface BaseLayoutProps extends WithChildren, WithClassName {
	as?: ElementType;
	seo?: Partial<WithProps<typeof NextSeo>>;
}

export function BaseLayout({ as: Main = 'main', children, className, seo }: BaseLayoutProps) {
	const seoProps = useSeoProps(seo);

	return (
		<>
			<NextSeo {...seoProps} />
			<Main className={className}>{children}</Main>
		</>
	);
}

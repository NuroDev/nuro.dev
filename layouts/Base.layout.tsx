import { ElementType, forwardRef } from 'react';
import { NextSeo } from 'next-seo';

import { useSeoProps } from '~/lib/useSeoProps';

import type { WithChildren, WithClassName, WithProps } from '~/types';

interface BaseLayoutProps extends WithChildren, WithClassName {
	as?: ElementType;
	seo?: Partial<WithProps<typeof NextSeo>>;
}

export const BaseLayout = forwardRef<HTMLElement, BaseLayoutProps>(function BaseLayout(
	{ as: Main = 'main', children, className, seo },
	ref,
) {
	const seoProps = useSeoProps(seo);

	return (
		<>
			<NextSeo {...seoProps} />
			<Main ref={ref} className={className}>
				{children}
			</Main>
		</>
	);
});

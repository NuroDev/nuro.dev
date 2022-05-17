import { ElementType, forwardRef } from 'react';
import { NextSeo } from 'next-seo';
import { useEvent } from 'react-use';
import { useRouter } from 'next/router';

import { navigation } from '~/lib/navigation';
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
	const router = useRouter();
	const seoProps = useSeoProps(seo);

	useEvent('keydown', ({ key }) =>
		navigation.forEach(({ path }, i) => key === String(i + 1) && router.push(path)),
	);

	return (
		<>
			<NextSeo {...seoProps} />
			<Main ref={ref} className={className}>
				{children}
			</Main>
		</>
	);
});

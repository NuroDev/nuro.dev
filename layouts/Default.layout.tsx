import { NextSeo } from 'next-seo';

import { Background, Navbar } from '~/components';
import { usePersistantState, useSeoProps } from '~/lib';

import type { WithChildren, WithProps } from '~/types';

interface DefaultLayoutProps extends WithChildren {
	background?: boolean;
	seo?: Partial<WithProps<typeof NextSeo>>;
}

export function DefaultLayout({
	background: overrideBackground,
	children,
	seo,
}: DefaultLayoutProps) {
	const { animations: background } = usePersistantState().get();
	const showBackground = overrideBackground ?? background;

	const seoProps = useSeoProps(seo);

	return (
		<>
			<NextSeo {...seoProps} />
			<Navbar.Standard />
			<main className="flex flex-col justify-center px-8">
				{showBackground && <Background.Standard />}
				{children}
			</main>
		</>
	);
}

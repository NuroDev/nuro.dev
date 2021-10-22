import styled from '@emotion/styled';
import tw from 'twin.macro';
import { NextSeo } from 'next-seo';

import { usePersistantState, useSeoProps } from '~/lib';
import { Background, Navbar } from '~/components';

import type { WithChildren, WithProps } from '~/types';

interface DefaultLayoutProps extends WithChildren {
	background?: boolean;
	seo?: Partial<WithProps<typeof NextSeo>>;
}

const Main = styled.main(tw`flex flex-col justify-center px-8`);

export function DefaultLayout({
	background: overrideBackground,
	children,
	seo,
}: DefaultLayoutProps) {
	const { animations: background } = usePersistantState().get();
	const showBackground = overrideBackground ?? background;

	const defaultSeoProps = useSeoProps();

	return (
		<>
			<NextSeo {...defaultSeoProps} {...seo} />
			<Navbar.Standard />
			<Main>
				{showBackground && <Background.Standard />}
				{children}
			</Main>
		</>
	);
}

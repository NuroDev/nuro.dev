import styled from '@emotion/styled';
import tw from 'twin.macro';
import { NextSeo } from 'next-seo';

import { useSeoProps } from '~/lib';
import { Background, Navbar } from '~/components';

import type { WithChildren, WithProps } from '~/types';

interface DefaultLayoutProps extends WithChildren {
	background?: boolean;
	seo?: Partial<WithProps<typeof NextSeo>>;
}

const Main = styled.main(tw`flex flex-col justify-center px-1 sm:px-8`);

export function DefaultLayout({ background = true, children, seo }: DefaultLayoutProps) {
	const defaultSeoProps = useSeoProps();

	return (
		<>
			<NextSeo {...defaultSeoProps} {...seo} />
			<Navbar.Standard />
			<Main>
				{background && <Background.Standard />}
				{children}
			</Main>
		</>
	);
}

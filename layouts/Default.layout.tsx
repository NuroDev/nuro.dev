import styled from '@emotion/styled';
import tw from 'twin.macro';
import { NextSeo } from 'next-seo';

import { useSeoProps } from '~/lib';
import { Navbar } from '~/components';

import type { WithChildren, WithProps } from '~/types';

interface DefaultLayoutProps extends WithChildren {
	seo?: Partial<WithProps<typeof NextSeo>>;
}

const Main = styled.main(tw`flex flex-col justify-center px-1 sm:px-8`);

export function DefaultLayout({ children, seo }: DefaultLayoutProps) {
	const defaultSeoProps = useSeoProps();

	return (
		<>
			<NextSeo {...defaultSeoProps} {...seo} />
			<Navbar.Standard />
			<Main>{children}</Main>
		</>
	);
}

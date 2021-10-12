import styled from '@emotion/styled';
import tw from 'twin.macro';
import { NextSeo } from 'next-seo';

import { useSeoProps } from '~/lib';
import { Navbar } from '~/components';

import type { WithChildren, WithProps } from '~/types';

interface DefaultLayoutProps extends WithChildren {
	seo?: Partial<WithProps<typeof NextSeo>>;
}

const Body = styled.div`
	${tw`antialiased bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-100`}
`;

const Main = styled.main(tw`flex flex-col justify-center px-8`);

export default function DefaultLayout({ children, seo }: DefaultLayoutProps) {
	const defaultSeoProps = useSeoProps();

	return (
		<Body>
			<NextSeo {...defaultSeoProps} {...seo} />
			<Navbar.Standard />
			<Main>{children}</Main>
		</Body>
	);
}

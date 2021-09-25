import styled from '@emotion/styled';
import tw from 'twin.macro';
import { NextSeo } from 'next-seo';

import { useSeoProps } from '../lib';

import type { ComponentProps, PropsWithChildren } from 'react';

interface DefaultLayoutProps {
	seo?: Partial<ComponentProps<typeof NextSeo>>;
}

const Body = styled.div`
	${tw`antialiased bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-100`}
`;

const Main = styled.main(tw`flex flex-col justify-center px-8`);

export default function DefaultLayout({ children, seo }: PropsWithChildren<DefaultLayoutProps>) {
	const defaultSeoProps = useSeoProps();

	return (
		<Body>
			<NextSeo {...defaultSeoProps} {...seo} />
			<Main>{children}</Main>
		</Body>
	);
}

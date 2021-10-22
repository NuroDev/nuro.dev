import styled from '@emotion/styled';
import tw from 'twin.macro';
import { NextSeo } from 'next-seo';

import { useSeoProps } from '../lib';

import type { ComponentProps, PropsWithChildren } from 'react';
import { Navbar } from '~/components';

interface BlogLayoutProps {
	seo?: Partial<ComponentProps<typeof NextSeo>>;
}

const Main = styled.main(tw`flex flex-col justify-center sm:px-8`);

export function BlogLayout({ children, seo }: PropsWithChildren<BlogLayoutProps>) {
	const defaultSeoProps = useSeoProps();

	return (
		<>
			<NextSeo {...defaultSeoProps} title={'nuro ─ blog ─ all'} {...seo} />
			<Navbar.Standard />
			<Main>{children}</Main>
		</>
	);
}

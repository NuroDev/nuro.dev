import styled from '@emotion/styled';
import tw from 'twin.macro';

import { Layout } from '~/layouts';
import { Status } from '~/components';

const Container = styled.div(tw`
	flex flex-grow min-h-screen \
	pt-16 pb-12
`);

const Content = styled.div(tw`
	flex-grow flex flex-col justify-center max-w-sm sm:max-w-lg w-full \
	mx-auto px-0 sm:px-16
`);

export default function StatusPage() {
	return (
		<Layout.Default seo={{ title: 'nuro ─ status' }}>
			<Container>
				<Content>
					<Status.Widget />
				</Content>
			</Container>
		</Layout.Default>
	);
}

import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Icon } from '@iconify/react';

const ErrorContainer = styled.div(tw`
	flex space-x-4 w-full max-w-sm \
	mx-auto px-4 py-4 \
	bg-red-900 \
	backdrop-filter backdrop-blur-sm \
	border-2 border-red-500 \
	rounded-lg hover:shadow-lg \
	transition ease-in-out duration-300 \
	motion-safe:animate-pulse
`);

const ErrorIconContainer = styled.div(tw`
	w-12 h-12 flex justify-center items-center \
	my-auto \
	text-red-500
`);

const ErrorIcon = styled(Icon)(tw`
	w-8 h-8
`);

const ErrorLineContainer = styled.div(tw`
	flex-1 space-y-4 \
	py-1
`);

const ErrorLine = styled.div(tw`
	h-4 \
	rounded \
	ring-2 ring-red-500
`);

export function Error() {
	return (
		<ErrorContainer>
			<ErrorIconContainer>
				<ErrorIcon icon="feather:alert-triangle" />
			</ErrorIconContainer>
			<ErrorLineContainer>
				<ErrorLine tw="w-3/4" />
				<ErrorLine />
			</ErrorLineContainer>
		</ErrorContainer>
	);
}

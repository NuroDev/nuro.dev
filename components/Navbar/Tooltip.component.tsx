import styled from '@emotion/styled';
import tw from 'twin.macro';

export const Container = styled.div(tw`
	absolute top-full -left-1/2 z-10 \
	mt-3 ml-2 px-4 py-2 \
	bg-gray-100 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50 backdrop-filter backdrop-blur-sm \
	border border-gray-100 dark:border-gray-500 \
	text-gray-400 dark:text-white text-center text-xs \
	rounded-lg pointer-events-none \
	opacity-0 group-hover:opacity-100 \
	transition ease-in-out delay-300 duration-300
`);

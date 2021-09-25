import styled from '@emotion/styled';
import tw from 'twin.macro';

export const IconButton = styled.button(tw`\
	flex justify-center items-center \
	w-12 h-12 \
	p-2 \
	rounded-lg \
	text-gray-300 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-300 \
	bg-gray-50 hover:bg-gray-100 hover:bg-opacity-50 dark:bg-gray-900 dark:hover:bg-gray-800 \
	transition ease-in-out duration-300 \
	focus:outline-none focus:ring-4 focus:ring-primary-500
`);

export default IconButton;

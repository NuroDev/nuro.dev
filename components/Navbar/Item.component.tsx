import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Icon } from '@iconify/react';

export const Item = styled.a<{ $current: boolean }>`
	${tw`
		inline-flex \
		px-3 py-2 \
		bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 \
		text-gray-300 hover:text-gray-700 dark:hover:text-white \
		rounded-md \
		text-sm font-medium \
		transition ease-in-out duration-300
	`}

	${({ $current }) =>
		$current &&
		tw`bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 \
		text-gray-400 hover:text-gray-500 dark:text-white dark:hover:text-gray-100`}
`;

export const NavbarIcon = styled(Icon)(tw`w-4 h-4 my-1`);

import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Icon } from '@iconify/react';
import { useMemo } from 'react';
import { useTheme } from 'next-themes';

const Container = styled.div(tw`fixed top-0 right-0 m-8 z-10`);

const Button = styled.button(tw`flex justify-center items-center \
	w-12 h-12 \
	p-2 \
	rounded-lg \
	text-gray-300 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-300 \
	bg-gray-50 hover:bg-gray-100 hover:bg-opacity-50 dark:bg-gray-900 dark:hover:bg-gray-800 \
	transition ease-in-out duration-300 \
	focus:outline-none focus:ring-4 focus:ring-primary-500`);

const StyledIcon = styled(Icon)`
	${tw`w-6 h-6`}
`;

export function ThemeButton() {
	const { theme, setTheme } = useTheme();

	const isDark = useMemo(() => (theme === 'dark' ? true : false), [theme]);

	function toggle() {
		setTheme(isDark ? 'light' : 'dark');
	}

	return (
		<Container>
			<Button aria-label="Toggle Theme" onClick={toggle}>
				<StyledIcon icon={isDark ? 'feather:moon' : 'feather:sun'} />
			</Button>
		</Container>
	);
}

export default ThemeButton;

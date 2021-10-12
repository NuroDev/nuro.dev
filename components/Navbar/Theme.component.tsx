import styled from '@emotion/styled';
import tw from 'twin.macro';
import { useMemo } from 'react';
import { useTheme } from 'next-themes';

import { Navbar } from '..';
import { Theme as ThemeTypes } from '~/types';

const Button = styled.button(tw`
	relative inline-block \
	px-3 py-2 \
	bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 \
	text-gray-300 hover:text-gray-700 dark:hover:text-white \
	rounded-md \
	text-sm font-medium \
	transition ease-in-out duration-300
`);

export function Theme() {
	const { theme, setTheme } = useTheme();

	const isDark = useMemo(() => {
		if (theme === ThemeTypes.SYSTEM)
			return window.matchMedia('(prefers-color-scheme: dark)').matches;

		return theme === ThemeTypes.DARK;
	}, [theme]);

	function toggle() {
		setTheme(isDark ? 'light' : 'dark');
	}

	return (
		<Button aria-label="Toggle Theme" className="group" onClick={toggle}>
			<Navbar.Icon icon={isDark ? 'feather:moon' : 'feather:sun'} />
			<Navbar.Tooltip.Container>Theme</Navbar.Tooltip.Container>
		</Button>
	);
}

import styled from '@emotion/styled';
import tw from 'twin.macro';
import { useMemo } from 'react';
import { useTheme } from 'next-themes';

import { Navbar } from '..';
import { Theme } from '~/types';

const Button = styled.button(tw`
	inline-flex \
	px-3 py-2 \
	bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 \
	text-gray-300 hover:text-gray-700 dark:hover:text-white \
	rounded-md \
	text-sm font-medium \
	transition ease-in-out duration-300
`);

export function NavbarThemeButton() {
	const { theme, setTheme } = useTheme();

	const isDark = useMemo(() => {
		if (theme === Theme.SYSTEM)
			return window.matchMedia('(prefers-color-scheme: dark)').matches;

		return theme === Theme.DARK;
	}, [theme]);

	function toggle() {
		setTheme(isDark ? 'light' : 'dark');
	}

	return (
		<Button aria-label="Toggle Theme" onClick={toggle}>
			<Navbar.Icon icon={isDark ? 'feather:moon' : 'feather:sun'} />
		</Button>
	);
}

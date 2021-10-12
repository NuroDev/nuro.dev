import styled from '@emotion/styled';
import tw from 'twin.macro';
import { useMemo } from 'react';
import { useSound } from 'use-sound';
import { useTheme } from 'next-themes';

import { Navbar } from '..';
import { Theme as ThemeTypes } from '~/types';

const Button = styled.button(tw`
	relative inline-block \
	px-3 py-2 \
	bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 \
	text-gray-300 hover:text-gray-700 dark:hover:text-white \
	rounded-lg \
	text-sm font-medium \
	transition ease-in-out duration-300
	focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-100 dark:focus:ring-gray-500
`);

export function Settings() {
	const { theme, setTheme } = useTheme();
	const [play] = useSound('/sounds/click.ogg', {
		volume: 0.25,
	});

	const isDark = useMemo(() => {
		if (theme === ThemeTypes.SYSTEM)
			return window.matchMedia('(prefers-color-scheme: dark)').matches;

		return theme === ThemeTypes.DARK;
	}, [theme]);

	function toggleTheme() {
		play();
		setTheme(isDark ? 'light' : 'dark');
	}

	return (
		<>
			<Button aria-label="Toggle Theme" className="group" onClick={toggleTheme}>
				<Navbar.Icon icon={isDark ? 'feather:moon' : 'feather:sun'} />
				<Navbar.Tooltip>Theme</Navbar.Tooltip>
			</Button>
		</>
	);
}

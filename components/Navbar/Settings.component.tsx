import { useMemo } from 'react';
import { useTheme } from 'next-themes';

import { Button, Navbar } from '..';
import { Theme as ThemeTypes } from '~/types';

export function Settings() {
	const { theme, setTheme } = useTheme();

	const isDark = useMemo(() => {
		if (theme === ThemeTypes.SYSTEM)
			return window.matchMedia('(prefers-color-scheme: dark)').matches;

		return theme === ThemeTypes.DARK;
	}, [theme]);

	function toggleTheme() {
		setTheme(isDark ? 'light' : 'dark');
	}

	return (
		<>
			<Button.Icon aria-label="Toggle Theme" className="group" onClick={toggleTheme}>
				<Navbar.Icon icon={isDark ? 'feather:moon' : 'feather:sun'} />
				<Navbar.Tooltip>Theme</Navbar.Tooltip>
			</Button.Icon>
		</>
	);
}

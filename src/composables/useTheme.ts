import { useDark, useToggle } from '@vueuse/core';

export const isDark = useDark({
	storageKey: 'theme',
});

export const toggleTheme = useToggle(isDark);

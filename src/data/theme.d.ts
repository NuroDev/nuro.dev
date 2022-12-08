interface ColorTheme {
	50: string;
	100: string;
	200: string;
	300: string;
	400: string;
	500: string;
	600: string;
	700: string;
	800: string;
	900: string;
}

export interface ThemePalette {
	gray: ColorTheme;
	primary: ColorTheme;
	[key: string]: ColorTheme;
}

export declare const colors: {
	gray: ColorTheme;
	primary: ColorTheme;
	[key: string]: ColorTheme;
};

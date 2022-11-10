import { Theme } from '@emotion/react';
import DarkTheme from './dark.theme';
import LightTheme from './light.theme';

export const THEME_CONFIG = 'themeConfig';

export const ThemeManager = {
	saveTheme(theme: Theme) {
		localStorage.setItem(THEME_CONFIG, theme.name);
	},

	getTheme() {
		const themeStorage = localStorage.getItem(THEME_CONFIG) as 'light' | 'dark';
		if (themeStorage) {
			switch (themeStorage) {
				case 'light':
					return LightTheme;
				case 'dark':
					return DarkTheme;
				default:
					return LightTheme;
			}
		} else {
			localStorage.setItem(THEME_CONFIG, 'light');
			return LightTheme;
		}
	},
};

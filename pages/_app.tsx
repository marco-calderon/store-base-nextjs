import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { useEffect, useState } from 'react';
import LightTheme from '../lib/themes/light.theme';
import useDarkMode from 'use-dark-mode';
import DarkTheme from '../lib/themes/dark.theme';
import ThemeToggleContext from '../lib/themes/theme-toggle.context';

export default function App({ Component, pageProps }: AppProps) {
	const darkMode = useDarkMode(true);
	const currentTheme = darkMode.value ? DarkTheme : LightTheme;
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	return (
		<ThemeProvider theme={currentTheme}>
			{isMounted && (
				<ThemeToggleContext.Provider
					value={{
						isDarkTheme: darkMode.value,
						toggleTheme: darkMode.toggle,
					}}
				>
					<Component {...pageProps} />
				</ThemeToggleContext.Provider>
			)}
		</ThemeProvider>
	);
}

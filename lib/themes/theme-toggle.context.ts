import React from 'react';

const ThemeToggleContext = React.createContext({
	isDarkTheme: false,
	toggleTheme: () => {},
});

export default ThemeToggleContext;

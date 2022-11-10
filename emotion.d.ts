import '@emotion/react';

declare module '@emotion/react' {
	export interface Theme {
		name: string;
		color: {
			text: string;
			primary: string;
			secondary: string;
			tertiary: string;
			positive: string;
			negative: string;
		};
		background: {
			default: string;
			level1: string;
			level2: string;
			level3: string;
		};
	}
}

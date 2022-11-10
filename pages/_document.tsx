import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
	return (
		<Html>
			<Head>
				<meta content="width=device-width, initial-scale=1.0" name="viewport" />
				<meta content="" name="description" />
				<meta content="" name="keywords" />

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin=""
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />

				<Script src="/static/vendor/bootstrap/js/bootstrap.bundle.min.js" />
			</body>
		</Html>
	);
}

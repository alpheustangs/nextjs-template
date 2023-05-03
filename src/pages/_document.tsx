import * as React from "react";
import * as NextDocument from "next/document";
import { ServerStyleSheet } from "styled-components";

export default function Document() {
	// do something if detect IE browser
	React.useEffect(() => {
		if (window.document.DOCUMENT_NODE) {
			// window.location.replace("https://example.com/unsupported");
		}
	}, []);

	// Styled Components support
	const getInitialProps = async (ctx: NextDocument.DocumentContext) => {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps: any = await getInitialProps(ctx);

			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	};

	return (
		<NextDocument.Html>
			{/* no javascript */}
			<noscript>
				{/* <meta httpEquiv="refresh" content="0; URL=https://example.com/noscript" /> */}
			</noscript>
			{/* preconnect */}
			<link rel="preconnect" href="https://media.example.com" />
			{/* basic info */}
			<meta charSet="utf-8" />
			<meta name="theme-color" content="#FFFFFF" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, viewport-fit=cover"
			/>
			<link rel="icon" href="https://cdn.example.com/icon.png" />
			<link
				rel="shortcut icon"
				type="image/vnd.microsoft.icon"
				href="https://cdn.example.com/icon.png"
			/>
			<link rel="manifest" href="/manifest.json" />
			{/* SEO */}
			<meta property="og:type" content="website" />
			<meta property="twitter:card" content="summary_large_image" />
			{/* mobile */}
			<meta name="mobile-web-app-capable" content="yes" />
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta name="apple-mobile-web-app-title" content="Example" />
			<meta
				name="apple-mobile-web-app-status-bar-style"
				content="default"
			/>
			<link
				rel="apple-touch-icon"
				href="https://cdn.example.com/icon.png"
			/>
			<NextDocument.Head />
			<body className="none">
				<NextDocument.Main />
				<NextDocument.NextScript />
			</body>
		</NextDocument.Html>
	);
}

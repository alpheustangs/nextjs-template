import * as React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import Cookies from "universal-cookie";

import GlobalVariables from "@/styles/variables";
import GlobalStyles from "@/styles";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: React.ReactElement) => React.ReactElement;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

const getDefaultLayout = (page: React.ReactElement) => {
	return (
		<>
			{/* Layout */}
			{page}
		</>
	);
};

export const setLang = (val: string) => {
	const cookies = new Cookies();
	// 365 day (60000ms = 1min)
	const expires = 60000 * 60 * 60 * 24 * 365;

	cookies.set("lang", val, {
		path: "/",
		maxAge: expires,
		domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN,
	});

	document.documentElement.lang = val;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
	const router = useRouter();
	const cookies = new Cookies();
	const getLayout = Component.getLayout ?? getDefaultLayout;

	const langProvider = ["en", "zh-Hant"];

	const replace = (val: string) => {
		router.replace(router.route, router.asPath, {
			locale: val,
		});
	};

	const getLang = () => {
		// example: .com/en .com/zh-Hant
		let pathname = window.location.pathname;
		let linkLang = pathname.split("/")[1];
		// example: en-us zh-tw zh-hk
		let browserLang = navigator.language.includes("en") ? "en" : "zh-Hant";

		// example: en / zh-Hant
		let lang = linkLang || cookies.get("lang") || browserLang;

		if (langProvider.includes(lang)) {
			return lang;
		} else {
			return "zh-Hant";
		}
	};

	React.useEffect(() => {
		let lang = getLang();
		setLang(lang);
		replace(lang);
		document.body.classList.remove("none");
	}, []);

	return getLayout(
		<>
			<Component {...pageProps} />
			<GlobalStyles />
			<GlobalVariables />
		</>,
	);
};

export default appWithTranslation(App);

import * as React from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

import "@/layouts/styles.scss";

import Initialize from "@/services/initialize/initialize";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: React.ReactElement) => React.ReactElement;
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
}

const getDefaultLayout = (page: React.ReactElement) => {
    return (
        <>
            {/* Layout */}
            {page}
        </>
    );
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {

    const getLayout = Component.getLayout ?? getDefaultLayout;

    React.useEffect(() => {
        document.body.classList.remove("none");
    }, []);

    return getLayout(
        <>
            <Component {...pageProps} />
            <Initialize />
        </>
    );
}

export default appWithTranslation(App);
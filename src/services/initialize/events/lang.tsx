import * as React from "react";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default function Lang() {

    const router = useRouter();

    // provided languages
    let provider = ["en", "zh-Hant"];

    // routing
    const goTo = (val: string) => {
        router.replace(router.route, router.asPath, {
            locale: val,
        });
    }

    // 1. /zh-Hant or /en
    // 2. "lang" cookie
    // 3. browser language
    const getLang = () => {
        let pathname = window.location.pathname;
        let linkLang = pathname.split("/")[1];
        let browserLang = navigator.language.includes("en") ? "en" : "zh-Hant";

        let lang = linkLang || cookies.get("lang") || browserLang;
        
        if (provider.includes(lang)) {
            return lang;
        } else {
            return "zh-Hant";
        }
    }

    React.useEffect(() => {
        let lang = getLang();
        setLang(lang);
        goTo(lang);
    }, []);

    return (<></>);
}

export const setLang = (val: string) => {

    /* 365 day (60000ms = 1min) */
    const expires = ((60000 * 60) * 60) * 24 * 365;

    /* set Cookie */
    cookies.set(
        "lang",
        val,
        {
            path: "/",
            maxAge: expires,
            domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN
        }
    );

    document.documentElement.lang = val;

}
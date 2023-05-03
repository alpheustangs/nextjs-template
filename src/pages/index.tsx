import * as React from "react";
import type { NextPageWithLayout } from "@/pages/_app";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styled from "styled-components";

import Meta from "@/components/meta";

import { setLang } from "@/pages/_app";

const Page: NextPageWithLayout = () => {
	const router = useRouter();
	const { t } = useTranslation();

	const changeLang = (val: string) => {
		router.replace(router.route, router.asPath, {
			locale: val,
		});
		setLang(val);
	};

	return (
		<>
			<Meta title={t("title")} />
			<Div>{t("title")}</Div>
			<Div>{t("description")}</Div>
			<Blank />
			<button onClick={() => changeLang("en")}>
				change language - en
			</button>
			<Blank />
			<button onClick={() => changeLang("zh-Hant")}>
				change language - zh-Hant
			</button>
		</>
	);
};

export const getServerSideProps = async ({ query, locale }: any) => {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common"])),
		},
	};
};

export default Page;

const Div = styled.div`
	font-size: 20px;
	font-weight: bold;
	line-height: 30px;
`;

const Blank = styled.div`
	height: 20px;
	width: 100%;
`;

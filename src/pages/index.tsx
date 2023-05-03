import * as React from "react";
import type { NextPageWithLayout } from "@/pages/_app";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styled from "styled-components";

import Meta from "@/services/meta";

const Page: NextPageWithLayout = () => {
	const { t, i18n } = useTranslation();

	return (
		<>
			<Meta title={t("title")} />
			<Div>{t("title")}</Div>
			<Div>{t("description")}</Div>
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

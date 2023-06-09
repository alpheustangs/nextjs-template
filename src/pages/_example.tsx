import * as React from "react";
import type { NextPageWithLayout } from "@/pages/_app";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styled from "styled-components";

import Meta from "@/components/meta";

const Page: NextPageWithLayout = () => {
	const { t, i18n } = useTranslation();

	return (
		<>
			<Meta title={t("") + t("title")} />
		</>
	);
};

Page.getLayout = function getLayout(page: React.ReactElement) {
	return <>{page}</>;
};

export const getServerSideProps = async ({ query, locale }: any) => {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common"])),
		},
	};
};

export default Page;

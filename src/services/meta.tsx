import Head from "next/head";
import { useTranslation } from "next-i18next";

interface Props {
    title: string;
    image?: string;
    script?: string;
}

export default function Meta(props: Props) {

    const { t } = useTranslation();

    let title: string = props.title;
    let image: string = props.image || "";
    let script: string = props.script || t("description");

    return (
        <Head>
            <title>{title}</title>
            <meta name="title" content={title}/>
            <meta property="og:title" content={title}/>
            <meta property="twitter:title" content={title}/>

            <meta property="og:image" content={image}/>
            <meta property="twitter:image" content={image}/>

            <meta name="description" content={script}/>
            <meta property="og:description" content={script}/>
            <meta property="twitter:description" content={script}/>
        </Head>
    );
}
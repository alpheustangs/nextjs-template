/** @type {import("next").NextConfig} */

const { i18n } = require("./next-i18next.config.js");

const nextConfig = {
    // reactStrictMode: true,
    swcMinify: true,
    i18n,
    images: {
        domains: [
            "localhost",
            "https://media.example.com"
        ],
    },
    experimental: {
        scrollRestoration: true,
    },
    trailingSlash: false,
    compiler: {
        styledComponents: {
            displayName: false,
            ssr: true,
        }
    }
}

module.exports = nextConfig;
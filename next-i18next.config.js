const path = require("path");

module.exports = {
    i18n: {
        defaultLocale: "default",
        locales: [
            "default", 
            "en",
            "zh-Hant",
        ],
        localeDetection: false,
        localePath: path.resolve("./src/locales"),
    },
};
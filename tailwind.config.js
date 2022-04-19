module.exports = {
    content: ["./*.html", "./js/*.js"],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
        extend: {
            fontFamily: {
                merriweather: ["Merriweather", "serif"],
                robotoMono: ["Roboto Mono", "monospace"],
            },
            colors: {
                supLightLightGray: "#F8F9FA",
                supLightGray: "#E9ECEF",
                lightLightGray: "#DEE2E6",
                lightGray: "#CED4DA",
                gray: "#ADB5BD",
                darkGray: "#6C757D",
                darkDarkGray: "#495057",
                supDarkGray: "#343A40",
                supDarkDarkGray: "#212529",
                grayWhite: "#F8F9FB",
                lightBlueGray: "#E1ECF7",
                blueGray: "#AECBEB",
                lightBlue: "#83B0E1",
                skyBlue: "#71A5DE",
                darkSkyBlue: "#769EDB",
                darkBlue: "#023e8a",
                darkDarkBlue: "#03045e",
            },
        },
    },
    plugins: [],
};

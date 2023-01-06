module.exports = {
    content: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    theme: {
        extend: {
            colors: {
                "gray-100": "#E6E6EC", //use
                "gray-200": "#9C9DAB",
                "gray-300": "#9da4b0",
                "black-charcol": "#4A5061",
                "primary-border-color": "#464FB2",
                "blue-100": "#E8E8F7",
                "blue-200": "#FAF9FF",
                "blue-300": "#96a4d4",
                "blue-400": "#464FB2",
                "purplee-100": "#aa96d0",
                "g-dark-pink-100": "#DB8AC9",
                "g-pink-100": "#FDFCFF",
                "g-pink-200": "#E19BD2",
                "g-pink-300": "#d0d0eb",
                "g-green-100": "#6DB99E",
                "g-green-200": "#BBD8DC",
                "g-blue-100": "#9C9AFE",
                "g-blue-200": "#53A9D9",
                "g-red-100": "#CE8496",
                "g-red-200": "#F5ACBE",
                "ground-grey": "#FAFAFA",
                "white-200": "#fcfcfc",
                "white-300": "#f9f8ff",
            },
            borderWidth: {
                1: "0.0625rem",
            },
            padding: {
                15: "0.93rem",
                20: "1.25rem",
                60: "3.75rem",
                235: "14.68rem",
                300: "18.81rem",
            },
            margin: {
                20: "1.25rem",
                30: "1.875rem",
                60: "3.75rem",
            },
            width: {
                21: "1.25rem",
                100: "6.25rem",
                183: "11.43rem",
                235: "14.68rem",
                300: "18.81rem",
                354: "22.125rem",
                500: "31.25rem", //use
                560: "35rem",
                704: "44rem",
                846: "52.875rem",
            },
            minWidth: {
                40: "2.5rem",
                106: "6.625rem",
                704: "44rem",
            },
            fontSize: {
                25: "1.56rem",
                27: "1.68rem",
                32: "2rem",
                50: "3.125rem",
                180: "11.25rem",
            },
            fontFamily: {
                Poppins: ["Poppins", "sans-serif"],
                DMSans: ["DM Sans", "sans-serif"],
            },
            primary: {
                400: "#464FB2",
            },
            secondary: {
                400: "#4A5061",
            },
            height: {
                21: "1.25rem",
                48: "3rem",
                90: "calc(100% - 99px)",
                100: "6.25rem",
            },
            spacing: {
                16: "-1rem",
                5: "0.31rem",
                87: "5.43rem",
                235: "14.68rem",
                300: "18.81rem",
            },
            screens: {
                sm: "640px",
                // => @media (min-width: 640px) { ... }

                md: "768px",
                // => @media (min-width: 768px) { ... }

                lg: "1024px",
                // => @media (max-width: 1024px) { ... }

                tablet: "991px",
                // => @media (min-width: 991px) { ... }

                xl: "1280px",
                // => @media (min-width: 1280px) { ... }

                "large-down": { max: "1536px" },
                // => @media (max-width: 1536px) { ... }

                "lgdesktop-down": { max: "1366px" },
                // => @media (max-width: 1366px) { ... }

                "desktop-down": { max: "1200px" },
                // => @media (max-width: 1200px) { ... }

                "ipad-down": { max: "991px" },
                // => @media (max-width: 991px) { ... }

                "mobile-down": { max: "767px" },
                // => @media (max-width: 767px) { ... }

                "mobile-up": { min: "1201px" },
                // => @media (min-width: 1201px) { ... }

                "xs-down": { max: "480px" },
                // => @media (max-width: 480px) { ... }
            },
        },
    },
    plugins: [],
};

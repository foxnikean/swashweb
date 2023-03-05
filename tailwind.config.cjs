/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {

        extend: {
            colors: {
                spurple: "#58287F",
                bgwhite: "#C0BCCA",
                bgdark: "#222222",
                white: "#D9D9D9"
            },
        },
    },
    plugins: [],
};
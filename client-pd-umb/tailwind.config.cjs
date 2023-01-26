/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary-blue': '#00326f',
                'secondary-blue': '#038abe',
                'primary-green': '#8eb362'
            }
        },
    },
    plugins: [],
}
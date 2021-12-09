// const colors = require('tailwindcss/colors')

module.exports = {
    purge: [
        './public/**/*.html',
        './src/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                main: '#E04B4F'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
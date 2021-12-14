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

        fontSize: {
            'xs': '8px',
            'sm': '10px',
            'tiny': '12px',
            'base': '14px',
            'lg': '16px',
            'xl': '18px',
            '2xl': '22px',
            '3xl': '26px',
            '4xl': '32px',
            '5xl': '36px',
            '6xl': '42px',
            '7xl': '48px',
        },
        fontWeight: {
            normal: 400,
            medium: 500,
            bold: 600,
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
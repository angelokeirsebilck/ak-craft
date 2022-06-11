module.exports = {
    content: ['./templates/**/*.twig'],
    theme: {
        colors: {
            bg: {
                default: '#2F3137'
            },
            white: {
                default: '#FFF'
            },
            primary: {
                default: '#49F2CA'
            },
            secondary: {
                default: '#D14BE7'
            },
            tertiary: {
                default: '#75BDD3'
            },
            transparent: 'transparent'
        },
        extend: {
            fontSize: {
                copy: [
                    '18px',
                    {
                        lineHeight: '30px'
                    }
                ]
            },
            maxWidth: {
                container: '1440px'
            },
            backgroundImage: {
                underline: "url('/img/svg/underline.svg')"
            },
            blur: {
                circle: '150px'
            },
            animation: {
                blob: 'blob 6s infinite'
            },
            keyframes: {
                blob: {
                    '0%': {
                        transform: 'translate(0px, 0px) scale(1)'
                    },
                    '33%': {
                        transform: 'translate(30px, -50px) scale(1.1)'
                    },
                    '66%': {
                        transform: 'translate(-20px, 20px) scale(0.9)'
                    },
                    '100%': {
                        transform: 'tranlate(0px, 0px) scale(1)'
                    }
                }
            }
        }
    },
    plugins: [require('prettier-plugin-tailwindcss')]
}

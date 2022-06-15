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
            transparent: 'transparent',
            inherit: 'inherit'
        },
        extend: {
            fontSize: {
                copy: [
                    '18px',
                    {
                        lineHeight: '30px'
                    }
                ],
                h1Sm: [
                    '30px',
                    {
                        lineHeight: '35px'
                    }
                ],
                h1: [
                    '48px',
                    {
                        lineHeight: '55px'
                    }
                ]
            },
            spacing: {
                '1em': '1em'
            },
            borderRadius: {
                30: '30px'
            },
            maxWidth: {
                container: '1440px'
            },
            backgroundImage: {
                underline: "url('/img/svg/underline.svg')"
            },
            blur: {
                circle: '60px'
            },
            animation: {
                blob: 'blob 10s infinite'
            },
            keyframes: {
                blob: {
                    '0%': {
                        transform: 'translate(0px, 0px) scale(1)'
                    },
                    '33%': {
                        transform: 'translate(50px, -80px) scale(1.2)'
                    },
                    '66%': {
                        transform: 'translate(-20px, 20px) scale(0.9)'
                    },
                    '100%': {
                        transform: 'tranlate(0px, 0px) scale(1)'
                    }
                }
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        p: {
                            fontWeight: 300,
                            fontSize: '18px',
                            lineHeight: '30px'
                        },
                        strong: {
                            color: 'inherit',
                            fontWeight: 400
                        },
                        h2: {
                            fontSize: '26px',
                            marginBottom: '1em',
                            fontWeight: 500
                        },
                        ul: {
                            listStyleType: 'none',
                            paddingLeft: 0
                        },
                        li: {
                            position: 'relative',
                            marginTop: '0 !important',
                            marginBottom: '12px !important',
                            fontSize: '20px',
                            fontWeight: 500,
                            paddingLeft: '38px !important',

                            '&::before': {
                                position: 'absolute',
                                left: '0',
                                top: '7px',
                                height: '17px',
                                width: '22px',
                                content: '""',
                                display: 'block',
                                backgroundImage: "url('/img/svg/list-item.svg')"
                            }
                        }
                    }
                },
                lg: {
                    css: {
                        h2: {
                            fontSize: '31px',
                            fontWeight: 500,
                            marginBottom: '1em'
                        },
                        ul: {
                            listStyleType: 'none',
                            paddingLeft: 0
                        }
                    }
                },
                dark: {
                    css: {
                        '--tw-prose-headings': theme('colors.white.default'),
                        color: theme('colors.white.default')
                    }
                }
            })
        }
    },
    plugins: [
        require('prettier-plugin-tailwindcss'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography')
    ]
}

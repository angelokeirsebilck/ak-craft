const { url } = require('inspector')

module.exports = {
    content: ['./templates/**/*.twig', './src/vue/**/*.vue'],
    safelist: [
        '!mb-2',
        '!text-sm',
        'prose-a:text-black-default',
        'prose-a:font-light',
        '!px-0',
        '!leading-tight',
        {
            pattern: /grid/,
            variants: ['lg']
        }
    ],
    theme: {
        fontSize: {
            sm: '12px',
            md: '15px',
            copy: [
                '18px',
                {
                    lineHeight: '30px'
                }
            ],
            56: [
                '56px',
                {
                    lineHeight: '65px'
                }
            ],
            48: [
                '48px',
                {
                    lineHeight: '55px'
                }
            ],
            40: [
                '40px',
                {
                    lineHeight: '44px'
                }
            ],
            31: [
                '31px',
                {
                    lineHeight: '36px'
                }
            ],
            24: [
                '24px',
                {
                    lineHeight: '30px'
                }
            ],
            22: [
                '22px',
                {
                    lineHeight: '28px'
                }
            ],
            20: [
                '20px',
                {
                    lineHeight: '26px'
                }
            ]
        },
        colors: {
            black: {
                default: '#3D405B'
            },
            white: {
                default: '#FFF'
            },
            primary: {
                default: '#E07A5F'
            },
            secondary: {
                default: '#81B29A',
                light: '#C0D8CC'
            },
            tertiary: {
                default: '#F4F1DE'
            },
            quaternary: {
                default: '#F2CC8F'
            },
            transparent: 'transparent',
            inherit: 'inherit'
        },
        extend: {
            borderWidth: {
                3: '3px'
            },
            maxWidth: {
                container: '1440px'
            },
            backgroundImage: {
                underline: "url('/img/svg/underline.svg')"
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        '--tw-prose-headings': theme('colors.black.default'),
                        '--tw-prose-links': theme('colors.primary.default'),
                        p: {
                            fontWeight: 300,
                            fontSize: '16px',
                            lineHeight: '26px'
                        },
                        strong: {
                            color: 'inherit',
                            fontWeight: '300 !important',
                            backgroundImage: "url('/img/svg/marked3.svg')",
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '100% 22px',
                            backgroundPosition: 'bottom'
                        },
                        h2: {
                            fontSize: '26px',
                            lineHeight: '30px',
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
                            color: theme('colors.black.default'),
                            paddingLeft: '38px !important',

                            '&:last-child': {
                                marginBottom: '0 !important'
                            },

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
                md: {
                    css: {
                        h2: {
                            fontSize: '31px',
                            fontWeight: 500,
                            lineHeight: '36px'
                        },
                        p: {
                            fontWeight: 300,
                            fontSize: '18px',
                            lineHeight: '30px'
                        }
                    }
                }
            })
        }
    },
    plugins: [
        require('prettier-plugin-tailwindcss'),
        require('@tailwindcss/typography')
    ]
}

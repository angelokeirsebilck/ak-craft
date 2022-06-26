module.exports = {
    trailingComma: 'none',
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    printWidth: 80,
    plugins: ['./node_modules/prettier-plugin-twig-melody'],
    twigPrintWidth: 150,
    twigMultiTags: [
        'nav,endnav',
        'switch,case,default,endswitch',
        'ifchildren,endifchildren',
        'cache,endcache',
        'js,endjs',
        'macro,endmacro'
    ]
}

import '@/css/app.css'

import { installTwicPics, TwicImg } from '@twicpics/components/webcomponents'
import '@twicpics/components/style.css'

// if (import.meta.env.PROD) {
//     import('@/css/fonts-loaded.css')
// }

import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

// import FontFaceObserver from 'fontfaceobserver'

const main = async () => {
    installTwicPics({
        // domain is mandatory
        domain: `https://angelokeirsebilck.twic.pics`,
        env: import.meta.env.VITE_TWIC_PIC_MODE
    })

    customElements.define(`twic-img`, TwicImg)

    window.Alpine = Alpine
    Alpine.plugin(collapse)
    Alpine.start()

    // const poppinsFontRegular = new FontFaceObserver('Poppins', {
    //     weight: 400
    // })
    // const poppinsFontLight = new FontFaceObserver('Poppins', {
    //     weight: 300
    // })
    // const poppinsFontMedium = new FontFaceObserver('Poppins', {
    //     weight: 500
    // })
    // Promise.all([
    //     poppinsFontRegular.load(),
    //     poppinsFontLight.load(),
    //     poppinsFontMedium.load()
    // ]).then(function () {
    //     document.querySelector('body').classList.add('fonts-loaded')
    // })
}
const autoHeight = () => {
    const textAreaElements = document.querySelectorAll('textarea')

    textAreaElements.forEach((t) => {
        t.addEventListener('input', () => {
            resize(t)
        })
    })
}

const resize = (el) => {
    el.style.height = 'auto'
    el.style.height = `${el.scrollHeight}px`
}

const mobileNavAnimation = () => {
    ScrollTrigger.matchMedia({
        // large
        '(max-width: 1024px)': function () {
            const hamburger = document.querySelector('.js-hamburger')
            const close = document.querySelector('.js-close')
            const menu = document.querySelector('.js-menu')
            const green = document.querySelector('.js-green')
            const logo = document.querySelector('.js-logo')
            const links = gsap.utils.toArray('a:not(.js-logo)', menu)

            if (menu) {
                const menuTimeline = gsap.timeline({
                    onReverseComplete: () => {
                        gsap.set(menu, { x: '100%' })
                        gsap.set(green, { x: '100%' })
                    }
                })
                menuTimeline.pause()
                menuTimeline.addLabel('start', 0)
                menuTimeline
                    .to(green, {
                        x: 0,
                        ease: 'power4.out',
                        duration: 1
                    })
                    .to(
                        menu,
                        {
                            x: 0,
                            ease: 'power4.out',
                            duration: 1
                        },
                        'start+=0.2'
                    )
                    .to(
                        logo,
                        {
                            opacity: 1
                        },
                        '-=0.5'
                    )
                    .from(
                        links,
                        {
                            opacity: 0,
                            stagger: 0.1
                        },
                        '-=0.2'
                    )

                hamburger.addEventListener('click', () => {
                    disableBodyScroll(menu)
                    menuTimeline.timeScale(1).play()
                })

                close.addEventListener('click', () => {
                    enableBodyScroll(menu)
                    menuTimeline.timeScale(2).reverse()
                })
            }
        }
    })
}

const homeBannerAnimation = () => {
    const text = document.querySelector('.js-homeBannerText')
    const link = document.querySelector('.js-homeBannerLink')
    const bg1 = document.querySelector('.js-homeBannerbg1')
    const img = document.querySelector('.js-homeBannerImg')

    const homeBannerTimeline = gsap.timeline()

    homeBannerTimeline
        .addLabel('start', 0)

        .to(text, {
            opacity: 1,
            y: 0,
            duration: 0.3
        })
        .to(link, {
            opacity: 1,
            y: 0,
            duration: 0.3
        })
        .from(
            bg1,
            {
                width: 0
            },
            'start'
        )
        .to(
            img,
            {
                opacity: 1,
                x: 0
            },
            'start'
        )
}

const accordionImageSize = (items) => {
    items.forEach((parent) => {
        const container = parent.querySelector('.container')

        const containerWidth = container.offsetWidth

        const remainingWidth = (window.innerWidth - containerWidth) / 2

        const imageContainer = container.querySelector('.js-imgContainer')
        const background = container.querySelector(
            '.js-accordionImageBackground'
        )

        const img = container.querySelector('twic-img')
        background.style.height = `${img.offsetHeight}px`

        if (window.innerWidth > 1024) {
            img.style.width = `${
                imageContainer.offsetWidth + remainingWidth + 40
            }px`
        } else {
            img.style.width = `auto`
        }
    })
}

const initAnimations = () => {
    if (document.querySelector('.js-homeBanner')) homeBannerAnimation()

    const titleEls = document.querySelectorAll('.js-title')

    titleEls.forEach((title) => {
        gsap.to(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%'
            },
            y: 0
        })
    })

    const textEls = document.querySelectorAll('.js-text')

    textEls.forEach((text) => {
        gsap.from(text, {
            scrollTrigger: {
                trigger: text,
                start: 'top 75%'
            },
            opacity: 0,
            y: 30
        })
    })
}
main().then(() => {
    window.onload = async () => {
        accordionImageSize(document.querySelectorAll('.js-accordionImages'))
        autoHeight()
        mobileNavAnimation()

        initAnimations()

        window.dispatchEvent(new Event('resize'))

        // if (document.querySelectorAll('.js-accordion').length > 0) {
        //     let { default: initAccordions } = await import(
        //         './blocks/accordionImage.js'
        //     )

        //     initAccordions()
        // }
        const stepsEls = document.querySelectorAll('.js-steps')
        if (stepsEls.length > 0) {
            let { stepsAnimations } = await import('./blocks/steps.js')
            stepsEls.forEach((parent) => {
                stepsAnimations(parent)
            })
        }

        const textColumnEls = document.querySelectorAll('.js-textColumns')
        if (textColumnEls.length > 0) {
            let { default: initTextColumns } = await import(
                './blocks/textColumns'
            )
            textColumnEls.forEach((tc) => {
                initTextColumns(tc)
            })
        }

        const formEls = document.querySelectorAll('.js-form')
        if (formEls.length > 0) {
            let { formAnimation } = await import('./blocks/form')
            formEls.forEach((form) => {
                formAnimation(form)
            })
        }

        const uspEls = document.querySelectorAll('.js-usp')
        if (uspEls.length > 0) {
            let { default: initUsp } = await import('./blocks/usp')
            uspEls.forEach((usp) => {
                initUsp(usp)
            })
        }

        if (document.querySelectorAll('.js-fancyBox').length > 0) {
            let { default: Fancybox } = await import('./packages/fancybox.js')
        }

        window.addEventListener('CookieScriptLoaded', function () {
            document.querySelector('body').classList.add('cookie-script-loaded')
        })
    }
})

function resizeHandler() {
    accordionImageSize(document.querySelectorAll('.js-accordionImages'))
}

window.addEventListener('resize', resizeHandler)

if (import.meta.hot) {
    import.meta.hot.accept(() => {
        console.log('HMR')
    })
}

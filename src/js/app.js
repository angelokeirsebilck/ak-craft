import '@/css/app.css'

import { createApp, defineAsyncComponent } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import FontFaceObserver from 'fontfaceobserver'

// import ConfettiParty from '@/vue/ConfettiParty.vue'

const main = async () => {
    const poppinsFontRegular = new FontFaceObserver('Poppins', {
        weight: 400
    })

    const poppinsFontLight = new FontFaceObserver('Poppins', {
        weight: 300
    })

    const poppinsFontMedium = new FontFaceObserver('Poppins', {
        weight: 500
    })

    Promise.all([
        poppinsFontRegular.load(),
        poppinsFontLight.load(),
        poppinsFontMedium.load()
    ]).then(function () {
        document.querySelector('body').classList.add('fonts-loaded')
    })

    // Create our vue instances
    if (document.querySelectorAll('.js-accordion').length > 0) {
        const Accordion = defineAsyncComponent(() =>
            import('../vue/components/accordion/Accordion.vue')
        )
        document.querySelectorAll('.js-accordion').forEach((accordion) => {
            const accordionApp = createApp({})
            accordionApp.component('Accordion', Accordion)
            accordionApp.mount(accordion)
        })
    }
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

        const img = container.querySelector('img')
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
    const title = document.querySelector('.js-homeBannerTitle')
    const text = document.querySelector('.js-homeBannerText')
    const link = document.querySelector('.js-homeBannerLink')

    const homeBannerTimeline = gsap.timeline()
    homeBannerTimeline.addLabel('start', 0)
    homeBannerTimeline
        .to(title, {
            opacity: 1,
            duration: 0.2
        })
        .to(
            text,
            {
                opacity: 1,
                duration: 0.2
            },
            'start+=0.1'
        )
        .to(
            link,
            {
                opacity: 1,
                duration: 0.2
            },
            'start+=0.3'
        )
}

main().then(() => {
    window.onload = () => {
        accordionImageSize(document.querySelectorAll('.js-accordionImages'))
        autoHeight()
        mobileNavAnimation()
        // homeBannerAnimation()
        window.dispatchEvent(new Event('resize'))
    }

    function resizeHandler() {
        accordionImageSize(document.querySelectorAll('.js-accordionImages'))
    }

    window.addEventListener('resize', resizeHandler)
})

if (import.meta.hot) {
    import.meta.hot.accept(() => {
        console.log('HMR')
    })
}

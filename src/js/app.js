import '@/css/app.css'

import { createApp, defineAsyncComponent } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

// import ConfettiParty from '@/vue/ConfettiParty.vue'

const main = async () => {
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

            const menuTimeline = gsap.timeline()
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
                menuTimeline.timeScale(1).play()
            })

            close.addEventListener('click', () => {
                menuTimeline.timeScale(2).reverse()
            })
        }
    })
}

main().then(() => {
    window.onload = () => {
        accordionImageSize(document.querySelectorAll('.js-accordionImages'))
        autoHeight()
        mobileNavAnimation()
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

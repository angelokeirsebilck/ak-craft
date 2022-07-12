import '@/css/app.css'

import { createApp, defineAsyncComponent } from 'vue'

// import ConfettiParty from '@/vue/ConfettiParty.vue'

const main = async () => {
    // Create our vue instances
    const app = createApp({})

    if (document.querySelectorAll('.js-accordion').length > 0) {
        const Accordion = defineAsyncComponent(() =>
            import('../vue/components/accordion/Accordion.vue')
        )

        document.querySelectorAll('.js-accordion').forEach((accordion) => {
            app.component('Accordion', Accordion)
        })
    }

    app.mount('#wrapper')
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

main().then(() => {
    window.onload = () => {
        accordionImageSize(document.querySelectorAll('.js-accordionImages'))
        autoHeight()
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

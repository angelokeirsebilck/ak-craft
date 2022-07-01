import '@/css/app.css'

// import { createApp } from 'vue'

// import ConfettiParty from '@/vue/ConfettiParty.vue'

const main = async () => {
    // Create our vue instance
    // const app = createApp(ConfettiParty);
    // // Mount the app
    // app.mount('.confetti');
    // app.mount('.confetti');
}

const accordionImageSize = (items) => {
    items.forEach((parent) => {
        const container = parent.querySelector('.container')

        const containerWidth = container.offsetWidth

        const remainingWidth = (window.innerWidth - containerWidth) / 2

        const imageContainer = container.querySelector('.js-imgContainer')
        const background = container.querySelector('.js-background')

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

main().then(() => {
    window.onload = () => {
        // if (document.querySelectorAll('.js-accordionImages').length > 0) {
        //     const { default: accordionImageSize } = await import(
        //         '/src/js/blocks/accordionImage.js'
        //     )
        //     accordionImageSize(document.querySelectorAll('.js-accordionImages'))
        // }

        accordionImageSize(document.querySelectorAll('.js-accordionImages'))
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

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

const addUnderlineBackgrounds = () => {
    const heading2Underline = document.querySelectorAll('h2 strong')
    heading2Underline.forEach((h) => {
        h.classList.add(
            'bg-underline',
            'bg-no-repeat',
            'bg-bottom',
            'font-medium'
        )
    })
}

main().then(() => {
    window.onload = (event) => {
        addUnderlineBackgrounds()
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(() => {
        console.log('HMR')
    })
}

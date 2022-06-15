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

const spanBackgroundWidth = () => {}

main().then(() => {
    window.onload = (event) => {
        spanBackgroundWidth()
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(() => {
        console.log('HMR')
    })
}

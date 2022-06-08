import '@/css/app.css'

import { createApp } from 'vue';

import ConfettiParty from '@/vue/ConfettiParty.vue'

const main = async () => {
    // Create our vue instance
    const app = createApp(ConfettiParty);
    // Mount the app
    app.mount('.confetti');
};

main().then(() => {
    console.log("qzdqqzdtest qzdqz ");
});


if (import.meta.hot) {
    import.meta.hot.accept(() => {
        console.log("HMR")
    });
}
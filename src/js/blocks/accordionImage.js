import { createApp, defineAsyncComponent } from 'vue'

const initAccordions = () => {
    if (document.querySelectorAll('.js-accordion').length > 0) {
        const Accordion = defineAsyncComponent(() =>
            import('../../vue/components/accordion/Accordion.vue')
        )
        document.querySelectorAll('.js-accordion').forEach((accordion) => {
            const accordionApp = createApp({})
            accordionApp.component('Accordion', Accordion)
            accordionApp.mount(accordion)
        })
    }
}
export default initAccordions

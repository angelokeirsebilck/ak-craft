import '@fancyapps/ui/dist/panzoom.css'
import { Panzoom } from '@fancyapps/ui'

const initPanzoomSteps = (panzoomItems) => {
    panzoomItems.forEach((element) => {
        const zoomOut = element
            .closest('.js-panzoomParent')
            .querySelector('.js-zoomOut')
        const zoomIn = element
            .closest('.js-panzoomParent')
            .querySelector('.js-zoomIn')
        const panZoom = new Panzoom(element)

        zoomOut.addEventListener('click', () => {
            panZoom.zoomOut()
        })

        zoomIn.addEventListener('click', () => {
            panZoom.zoomIn()
        })
    })
}
export default initPanzoomSteps

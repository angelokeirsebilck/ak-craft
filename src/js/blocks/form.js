import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const formAnimation = (parent) => {
    const bgEls = gsap.utils.toArray('.js-formBg', parent)
    bgEls.forEach((bg) => {
        const bgTl = gsap.timeline({
            scrollTrigger: {
                trigger: parent,
                start: 'top 70%'
                // markers: true
            }
        })

        bgTl.to(bg, {
            height: '100%',
            duration: 1
        })
    })
}

export { formAnimation }

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const basicParallax = (element, value, mobile = true) => {
    if (mobile) {
        animation(element, value)
    } else {
        ScrollTrigger.matchMedia({
            // large
            '(min-width: 768px)': function () {
                animation(element, value)
            }
        })
    }
}

const animation = (element, value) => {
    const parallaxAnimation = gsap.timeline()

    parallaxAnimation.fromTo(
        element,
        {
            yPercent: value,
            ease: 'none'
        },
        {
            yPercent: `-${value}`
        }
    )

    ScrollTrigger.create({
        trigger: element,
        scrub: 1,
        // markers: true,
        animation: parallaxAnimation
    })
}

export default basicParallax

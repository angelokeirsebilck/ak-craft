import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import basicParallax from '../basicparallax'
gsap.registerPlugin(ScrollTrigger)

const stepsAnimations = (parent) => {
    const oddPictures = parent.querySelectorAll('.js-stepsPictureOdd')
    oddPictures.forEach((picture) => {
        basicParallax(picture, 20, false)
    })
    const evenEls = parent.querySelectorAll('.js-stepsEven')

    evenEls.forEach((el) => {
        const bg = el.querySelector('.js-stepsEvenBg')
        const evenTextEl = el.querySelectorAll('.js-stepsEvenText')
        const bgTl = gsap.timeline({
            scrollTrigger: {
                trigger: bg,
                start: 'top 70%'
                // markers: true
            }
        })

        bgTl.to(bg, {
            height: '76%',
            duration: 1.7
        }).from(
            evenTextEl,
            {
                opacity: 0,
                y: 30
            },
            '-=1.3'
        )
    })
}
export { stepsAnimations }

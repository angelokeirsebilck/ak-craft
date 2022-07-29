import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const initTextColumns = (parent) => {
    const bg = parent.querySelector('.js-textColumnsBg')
    const parallaxAnimation = gsap.timeline()

    parallaxAnimation.fromTo(
        bg,
        {
            yPercent: 10,
            ease: 'none'
        },
        {
            yPercent: -10
        }
    )

    ScrollTrigger.create({
        trigger: parent,
        scrub: 1,
        // markers: true,
        animation: parallaxAnimation
    })

    let textEls = gsap.utils.toArray(
        ['.js-textColumnsBg', '.js-textRight'],
        parent
    )

    const tl = new gsap.timeline({
        scrollTrigger: {
            trigger: bg,
            start: 'top 80%'
            // markers: true
        }
    })

    tl.to(textEls, {
        opacity: 1,
        stagger: 0.2
    })
}

export default initTextColumns

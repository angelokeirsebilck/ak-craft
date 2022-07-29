import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const initUsp = (parent) => {
    const uspBg = parent.querySelector('.js-uspBg')
    const uspItems = gsap.utils.toArray('.js-uspItem', parent)

    const bgTl = gsap.timeline({
        scrollTrigger: {
            trigger: parent,
            start: 'top 70%'
            // markers: true
        }
    })

    bgTl.from(uspBg, {
        height: '0%',
        duration: 1.7
    }).from(
        uspItems,
        {
            opacity: 0,
            y: 30,
            stagger: 0.2
        },
        '-=1.3'
    )
}

export default initUsp

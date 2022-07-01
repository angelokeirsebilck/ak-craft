const accordionImageSize = (items) => {
    items.forEach((parent) => {
        const container = parent.querySelector('.container')

        const containerWidth = container.offsetWidth

        const remainingWidth = (window.innerWidth - containerWidth) / 2
        console.log(remainingWidth)

        const imageContainer = container.querySelector('.js-imgContainer')
        const img = container.querySelector('img')
        img.style.width = `${
            imageContainer.offsetWidth + remainingWidth + 40
        }px`
    })
}

export default accordionImageSize

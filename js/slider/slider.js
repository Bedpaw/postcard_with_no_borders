function createSlideDiv(image) {

    const slideDiv = document.createElement('div')
    slideDiv.classList.add('slide')

    const slideImg = document.createElement('img')
    slideImg.classList.add('slide-img')
    if (image.active) slideImg.classList.add('active')

    slideImg.src = image.src
    slideImg.alt = 'slide'

    slideDiv.appendChild(slideImg)
    return slideDiv
}

export default function createSlider(htmlElem, imagesDetails) {
    let slides = []
    let activeImageIndex = 0
    const slider = document.getElementsByClassName(htmlElem)[0]

    imagesDetails.map((imageDetail) => {
        const slideDiv = createSlideDiv(imageDetail)
        slides.push(slideDiv)
    })

    slider.appendChild(slides[activeImageIndex])
    slider.appendChild(slides[activeImageIndex + 1])
    slider.appendChild(slides[activeImageIndex + 2])
    slider.appendChild(slides[activeImageIndex + 3])


    const activeImageDiv = slider.lastChild
    activeImageDiv.classList.add('active')
}



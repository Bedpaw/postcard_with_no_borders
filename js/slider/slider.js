function createSlideDiv(image) {

    const slideDiv = document.createElement('div')
    slideDiv.classList.add('slide')
    slideDiv.style.display = 'none'

    const slideImg = document.createElement('img')
    slideImg.classList.add('slide-img')
    slideImg.src = image.src
    slideImg.alt = 'slide'

    slideDiv.appendChild(slideImg)
    return [slideDiv, image.horizontal]
}


export default function createSlider(htmlElem, imagesDetails) {

    const getFirstImage = (activeImageIndex) => {
        if (activeImageIndex === 1) return slider.childNodes[slider.childNodes.length - 1]
        if (activeImageIndex === 0) return slider.childNodes[slider.childNodes.length - 2]
        else return slider.childNodes[activeImageIndex - 2]
    }

    const getActiveImage = (activeImageIndex) => slider.childNodes[activeImageIndex]

    const nextImage = (event) => {
        if (event.target.classList.contains('active')) {
            hideAndUnActiveImage(getActiveImage(activeImageIndex))
            if (--activeImageIndex === -1) activeImageIndex = slider.childNodes.length - 1
            if (activeImageIndex === 1 || activeImageIndex === 0) getActiveImage(activeImageIndex).style.order = '1';
            showAndActiveImage(getActiveImage(activeImageIndex))
            getFirstImage(activeImageIndex).style.display = 'flex'
        }
    }

    const hideAndUnActiveImage = (activeImage) => {
        activeImage.style.display = 'none'
        activeImage.classList.remove('active')
        activeImage.firstChild.classList.remove('active')
        activeImage.style.order = '0'
    }

    const showAndActiveImage = (imageToActive) => {
        // (slidesPositions[activeImageIndex])? imageToActive.style.width = '70%' : imageToActive.style.width = '40%'
        imageToActive.style.display = 'flex'
        imageToActive.classList.add('active')
        imageToActive.firstChild.classList.add('active')
    }

    const slider = document.getElementsByClassName(htmlElem)[0]

    const slidesPositions = []
    imagesDetails.map((imageDetail) => {
        const [slideDiv, slidePosition] = createSlideDiv(imageDetail)
        slidesPositions.push(slidePosition)
        slideDiv.addEventListener('click', (event) => nextImage(event))
        slider.appendChild(slideDiv)
    })

    let activeImageIndex = slider.childNodes.length - 1

    getFirstImage(activeImageIndex).style.display = 'flex'
    slider.childNodes[activeImageIndex -1].style.display = 'flex'
    getActiveImage(activeImageIndex).style.display = 'flex'
    getActiveImage(activeImageIndex).classList.add('active')
    getActiveImage(activeImageIndex).firstChild.classList.add('active')



}



import * as sU from './slider-utils.js'
function createSlideDiv(image) {

    const slideDiv = document.createElement('div')
    slideDiv.classList.add('slide')
    slideDiv.style.display = 'none'
    slideDiv.style.order = '0'

    const slideImg = document.createElement('img')
    slideImg.classList.add('slide-img')
    slideImg.src = image.src
    slideImg.alt = 'slide'

    const arrowLeftDiv = document.createElement('div')
    arrowLeftDiv.classList.add('arrow-left-div')
    const arrowLeft = document.createElement('div')
    arrowLeft.classList.add('arrow-left')
    arrowLeftDiv.appendChild(arrowLeft)

    const arrowRightDiv = document.createElement('div')
    arrowRightDiv.classList.add('arrow-right-div')
    const arrowRight = document.createElement('div')
    arrowRight.classList.add('arrow-right')
    arrowRightDiv.appendChild(arrowRight)

    slideDiv.appendChild(arrowLeftDiv)
    slideDiv.appendChild(slideImg)
    slideDiv.appendChild(arrowRightDiv)
    return [slideDiv, image.horizontal]
}

export default function createSlider(htmlElem, imagesDetails) {
    // S -> SLIDER
    // sU -> SLIDER UTILS
    const setProperImagesWidth = (media) => sU.setProperWidths(S, activeImageIndex, slidesPositions, media)
    const getFirstImage = () => sU.getImage(S, activeImageIndex, 1)
    const getSecondImage = () => sU.getImage(S, activeImageIndex, 2)
    const getActiveImage = () => sU.getImage(S, activeImageIndex, 3)

    const showFirstImage = () => getFirstImage().style.display = 'flex'
    const showSecondImage = () => getSecondImage().style.display = 'flex'

    const showAndActiveImage = () => {
        const imageToActive = getActiveImage()
        imageToActive.style.display = 'flex'
        imageToActive.classList.add('active')
        imageToActive.childNodes[0].style.display = 'flex'
        imageToActive.childNodes[1].classList.add('active')
        imageToActive.childNodes[2].style.display = 'flex'
    }

    const hideAndUnActiveImage = () => {
        const activeImage = getActiveImage()
        activeImage.style.display = 'none'
        activeImage.classList.remove('active')
        activeImage.childNodes[1].classList.remove('active')
        activeImage.style.order = '0'
        activeImage.childNodes[0].style.display = 'none'
        activeImage.childNodes[2].style.display = 'none'
    }

    const nextActiveImageIndex = () => {
        if (--activeImageIndex === -1) activeImageIndex = S.childNodes.length - 1
        if (activeImageIndex === 1 || activeImageIndex === 0) getActiveImage().style.order = '2';
        if (activeImageIndex === 1) getSecondImage().style.order = '1';
    }
    const prevActiveImageIndex = () => {
        if (++activeImageIndex === S.childNodes.length) activeImageIndex = S.childNodes.length - 1
        if (activeImageIndex === 1 || activeImageIndex === 0) getActiveImage().style.order = '2';
        if (activeImageIndex === 1) getSecondImage().style.order = '1';
    }

    const nextImage = () => {
        hideAndUnActiveImage()
        nextActiveImageIndex()
        showAndActiveImage()
        showFirstImage()
        setProperImagesWidth()
    }
    const prevImage = () => {
        hideAndUnActiveImage()
        prevActiveImageIndex()
        showAndActiveImage()
        showFirstImage()
        setProperImagesWidth()
    }
/////////////////////////// INITIALIZE /////////////////////////////////
    const S = document.getElementsByClassName(htmlElem)[0]
    const slidesPositions = []

    imagesDetails.map((imageDetail) => {
        const [slideDiv, slidePosition] = createSlideDiv(imageDetail)
        slidesPositions.push(slidePosition)
        slideDiv.childNodes[0].addEventListener('click', () => prevImage())
        slideDiv.childNodes[2].addEventListener('click', () => nextImage())
        S.appendChild(slideDiv)
    })

    // Show first 3 pictures
    let activeImageIndex = S.childNodes.length - 1
    showFirstImage()
    showSecondImage()
    showAndActiveImage()
}

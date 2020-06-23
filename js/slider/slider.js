import * as sU from './slider-utils.js'
import { createHiddenPostcard } from './hidden-postcard-creator.js'
import { createSlideDiv } from './slide-creator.js'


export default function createSlider(htmlElem, imagesDetails) {
    // S -> SLIDER
    // sU -> SLIDER UTILS
    const setProperImagesWidth = (media) => sU.setProperWidths(S, activeImageIndex, slidesPositions, media)

    const getFirstImage = () => sU.getImage(S, activeImageIndex, 1)
    const getSecondImage = () => sU.getImage(S, activeImageIndex, 2)
    const getActiveImage = () => sU.getImage(S, activeImageIndex, 3)

    const showAndSetOrderForFirstImage = () => {
        const image = getFirstImage()
        image.style.display = 'flex'
        image.style.order = '1'
    }
    const showAndSetOrderForSecondImage = () => {
        const image = getSecondImage()
        image.style.display = 'flex'
        image.style.order = '2'
    }
    const showAndSetOrderForActiveImage = () => {
        const image = getActiveImage()
        image.style.display = 'flex'
        image.style.order = '3'
        activeImage(image)
    }
    const hideImage = (imageToHide) => {
        imageToHide.style.display = 'none'
        imageToHide.style.order = '0'
    }

    const nextActiveImageIndex = () => {
        if (--activeImageIndex === -1) activeImageIndex = S.childNodes.length - 1
    }
    const prevActiveImageIndex = () => {
        if (++activeImageIndex === S.childNodes.length) activeImageIndex = 0
    }

    const setDisplayForArrowsAndHiddenImage = (image, display) => {
        image.childNodes[0].style.display = display // arrowLeft
        image.childNodes[2].style.display = display // arrowRight
        image.childNodes[3].style.display = display // hiddenImage
    }

    const activeImage = (imageToActive) => {
        imageToActive.classList.add('active')
        imageToActive.childNodes[1].classList.add('active') // image
        setDisplayForArrowsAndHiddenImage(imageToActive, 'flex')

    }
    const unActiveImage = (activeImage) => {
        activeImage.classList.remove('active')
        activeImage.childNodes[1].classList.remove('active') // image
        setDisplayForArrowsAndHiddenImage(activeImage, 'none')

    }

    const showAndSetOrderForImages = () => {
        showAndSetOrderForFirstImage()
        showAndSetOrderForSecondImage()
        showAndSetOrderForActiveImage()
    }
    const hideAndUnActive = (imageToHide, imageToUnActive) => {
        hideImage(imageToHide)
        unActiveImage(imageToUnActive)
    }

    const nextImage = () => {
        hideAndUnActive(getActiveImage(), getActiveImage())
        nextActiveImageIndex()
        showAndSetOrderForImages()
        setProperImagesWidth()
    }
    const prevImage = () => {
        hideAndUnActive(getFirstImage(), getActiveImage())
        prevActiveImageIndex()
        showAndSetOrderForImages()
        setProperImagesWidth()
    }

/////////////////////////// INITIALIZE /////////////////////////////////

    const S = document.getElementsByClassName(htmlElem)[0]
    const slidesPositions = []

    imagesDetails.map( (imageDetail) => {
        const [slideDiv, slidePosition] = createSlideDiv(imageDetail)
        slidesPositions.push(slidePosition)
        slideDiv.childNodes[0].addEventListener('click', () => prevImage())
        slideDiv.childNodes[2].addEventListener('click', () => nextImage())
        slideDiv.appendChild(createHiddenPostcard())
        S.appendChild(slideDiv)
    })

    // Show first 3 pictures
    let activeImageIndex = S.childNodes.length - 1
    showAndSetOrderForFirstImage()
    showAndSetOrderForSecondImage()
    showAndSetOrderForActiveImage()
}

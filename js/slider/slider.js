import * as sU from './slider-utils.js'
import { createHiddenPostcard, createHiddenPostcardParis } from './hidden-postcard-creator.js'
import { createSlideDiv } from './slide-creator.js'


export default function createSlider(htmlElem, imagesDetails, hiddenPostCardTexts) {
    // S -> SLIDER
    // sU -> SLIDER UTILS
    const setProperImagesWidth = () => sU.setProperWidths(S, activeImageIndex, slidesPositions)

    const getFirstImage = () => sU.getImage(S, activeImageIndex, 1)
    const getSecondImage = () => sU.getImage(S, activeImageIndex, 2)
    const getActiveImage = () => sU.getImage(S, activeImageIndex, 3)

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
        const images = [getFirstImage(), getSecondImage(), getActiveImage()]
        activeImage(images[2])

        images.map((image, index) => {
            image.style.display = 'flex'
            image.style.order = index.toString()
        })

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

    imagesDetails.map( (imageDetail, index) => {
        const [slideDiv, slidePosition] = createSlideDiv(imageDetail)
        slidesPositions.push(slidePosition)
        slideDiv.childNodes[0].addEventListener('click', () => prevImage())
        slideDiv.childNodes[2].addEventListener('click', () => nextImage())

        if (index !== 5) {
            const paris = createHiddenPostcard(hiddenPostCardTexts[index])
            slideDiv.appendChild(paris)
        } else {
          slideDiv.appendChild(createHiddenPostcardParis(hiddenPostCardTexts[index]))
        }
        S.appendChild(slideDiv)
    })
    const mobileSize = window.matchMedia("(max-width: 768px)")
    const mobileSize2 = window.matchMedia("(min-width: 768px)")
    const desktopSize = window.matchMedia("(min-width: 1024px)")
    const tabletSize = window.matchMedia("(max-width: 1024px)")
    mobileSize.addListener(setProperImagesWidth)
    desktopSize.addListener(setProperImagesWidth)
    tabletSize.addListener(setProperImagesWidth)
    mobileSize2.addListener(setProperImagesWidth)


    // Show first 3 pictures
    let activeImageIndex = S.childNodes.length - 1
    showAndSetOrderForImages()
    setProperImagesWidth()

}

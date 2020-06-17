import * as sU from './slider-utils.js'

function createHiddenPostcard(postcardDetails = {
    title: 'Pozdrowienia z Malty',
    p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dolor sem, facilisis ac lectus luctus, tempus congue libero. Donec id risus a lorem commodo dictum. Nam sit amet pellentesque lacus. Aenean pellentesque dolor felis, vel pretium nunc efficitur euismod. Duis ac dolor ante. Vestibulum tortor diam, gravida a cursus non, pellentesque eget ipsum. Suspendisse potenti. Morbi eget nibh magna. Nulla ex turpis, gravida ac risus ac, pretium laoreet libero. Maecenas posuere tristique malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    p2: "Maecenas semper sem ut turpis iaculis, sit amet tincidunt purus auctor. Cras vehicula neque et arcu semper mattis. Nunc sed dui lacinia metus fringilla lacinia. Duis porta eros vitae mollis molestie. Suspendisse sagittis commodo nulla, vel venenatis est aliquet et. Nam tellus lorem, volutpat vitae diam quis, rutrum dignissim sem. Maecenas et nisi tristique, mollis turpis ac, pulvinar tortor. Aenean euismod velit sapien, at sodales nulla sodales non.",
    footer: "Goodbye, Ania"
}) {
    const postCardDiv = document.createElement('div')
    postCardDiv.classList.add('hidden-postcard')
    const postcardContent = document.createElement('div')
    postcardContent.classList.add('hidden-postcard-content')
    postCardDiv.appendChild(postcardContent)


    const title = document.createElement('div')
    title.innerText = postcardDetails.title
    title.classList.add('hidden-postcard-title')
    postcardContent.appendChild(title)


    const p1 = document.createElement('p')
    p1.innerText = postcardDetails.p1
    p1.classList.add('hidden-postcard-paragraph')

    postcardContent.appendChild(p1)

    const p2 = document.createElement('p')
    p2.innerText = postcardDetails.p2
    p2.classList.add('hidden-postcard-paragraph')
    postcardContent.appendChild(p2)

    const footer = document.createElement('div')
    footer.innerText = postcardDetails.footer
    postcardContent.appendChild(footer)
    return postCardDiv
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
        imageToActive.childNodes[3].style.display = 'flex'
    }

    const hideAndUnActiveImage = () => {
        const activeImage = getActiveImage()
        activeImage.style.display = 'none'
        activeImage.classList.remove('active')
        activeImage.style.order = '0'
        activeImage.childNodes[0].style.display = 'none'
        activeImage.childNodes[1].classList.remove('active')
        activeImage.childNodes[2].style.display = 'none'
        activeImage.childNodes[3].style.display = 'none'
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
        slideDiv.appendChild(createHiddenPostcard())
        S.appendChild(slideDiv)
    })

    // Show first 3 pictures
    let activeImageIndex = S.childNodes.length - 1
    showFirstImage()
    showSecondImage()
    showAndActiveImage()
}

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

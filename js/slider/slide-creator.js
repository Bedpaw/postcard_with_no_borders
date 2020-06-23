export function createSlideDiv(image) {

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

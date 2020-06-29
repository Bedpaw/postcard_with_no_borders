function getFirstImageIndex(S, activeImageIndex)
{
  if (activeImageIndex === 1) return S.childNodes.length - 1
  if (activeImageIndex === 0) return S.childNodes.length - 2
  else return activeImageIndex - 2
} 
function getSecondImageIndex(S, activeImageIndex) {
  if (activeImageIndex === 0) return S.childNodes.length - 1;
  else return activeImageIndex - 1
}
function getImageFromRight(S, activeImageIndex) {
  if (activeImageIndex === S.childNodes.length - 1) return 0
  else return activeImageIndex + 1
}
export function getImage(S, activeImageIndex, index) {
  let imageIndex = 0
  switch (index) {
    case 1:
      imageIndex = getFirstImageIndex(S, activeImageIndex)
      break
    case 2:
      imageIndex = getSecondImageIndex(S, activeImageIndex)
      break
    case 3:
      imageIndex = activeImageIndex
      break
    case 4:
      imageIndex = getImageFromRight()
      break;
  }
  return S.childNodes[imageIndex]
}


export function setProperWidths(S, activeImageIndex, slidesPositions) {
  const mqMobile = window.matchMedia( "(max-width: 767px)" );
 // const mqLandscape = window.matchMedia( "(orientation: landscape)" );
  const mqTablet = window.matchMedia( "(max-width: 1023px)" );
  const isFirstHorizontal = slidesPositions[getFirstImageIndex(S, activeImageIndex)]
  const isSecondHorizontal = slidesPositions[getSecondImageIndex(S, activeImageIndex)]
  const isActiveHorizontal = slidesPositions[activeImageIndex]

  const getFirstImage = () => getImage(S, activeImageIndex, 1)
  const getSecondImage = () => getImage(S, activeImageIndex, 2)
  const getActiveImage = () => getImage(S, activeImageIndex, 3)

  const setFirstImageWidth = (percentageWidth) => getFirstImage().style.width = percentageWidth + '%'
  const setSecondImageWidth = (percentageWidth) => getSecondImage().style.width = percentageWidth + '%'
  const setActiveImageWidth = (percentageWidth) => getActiveImage().style.width = percentageWidth + '%'

  const setActiveImageHeight = (percentageHeight) => getActiveImage().style.height = percentageHeight + '%'

  if (mqMobile.matches) {
    if (isActiveHorizontal) {
      setActiveImageWidth(100)
      setActiveImageHeight(66)
      getActiveImage().classList.add('horizontalPic-mobile')
      setFirstImageWidth(0)
      setSecondImageWidth(0)
    } else {
      setActiveImageWidth(85)
      setActiveImageHeight(100)
      setFirstImageWidth(0)
      setSecondImageWidth(0)
    }
  } /*  else if (mqMobile.matches && mqLandscape.matches) {
    getActiveImage().classList.remove('horizontalPic-mobile')
    setActiveImageHeight(100)
    if (isActiveHorizontal) {
      setActiveImageWidth(80)
      setFirstImageWidth(20)
      setSecondImageWidth(0)

    } else {
      setActiveImageWidth(50)

      if (isFirstHorizontal && isSecondHorizontal) {
        setActiveImageWidth(50)
        setFirstImageWidth(25)
        setSecondImageWidth(25)
      } else if (isFirstHorizontal) {
        setFirstImageWidth(50)
        setSecondImageWidth(0)
      } else if (isSecondHorizontal) {
        setFirstImageWidth(0)
        setSecondImageWidth(50)
      }
    }

  } */else if (mqTablet.matches) {
    getActiveImage().classList.remove('horizontalPic-mobile')
    setActiveImageHeight(100)
    if (isActiveHorizontal) {
      setActiveImageWidth(80)
      setFirstImageWidth(20)
      setSecondImageWidth(0)

    } else {
      setActiveImageWidth(50)

      if (isFirstHorizontal && isSecondHorizontal) {
        setActiveImageWidth(50)
        setFirstImageWidth(25)
        setSecondImageWidth(25)
      } else if (isFirstHorizontal) {
        setFirstImageWidth(50)
        setSecondImageWidth(0)
      } else if (isSecondHorizontal) {
        setFirstImageWidth(0)
        setSecondImageWidth(50)
      }
    }

} else{
    getActiveImage().classList.remove('horizontalPic-mobile')
    setActiveImageHeight(100)
    if (isActiveHorizontal) {
      setActiveImageWidth(60)

      if (isFirstHorizontal) {
        setFirstImageWidth(40)
        setSecondImageWidth(0)
      } else  if (isSecondHorizontal) {
        setFirstImageWidth(0)
        setSecondImageWidth(40)
      } else {
        setFirstImageWidth(20)
        setSecondImageWidth(20)
      }
    } else {
      setActiveImageWidth(35)

      if (isFirstHorizontal && isSecondHorizontal) {
        setActiveImageWidth(30)
        setFirstImageWidth(35)
        setSecondImageWidth(35)
      } else if (isFirstHorizontal) {
        setFirstImageWidth(40)
        setSecondImageWidth(25)
      } else if (isSecondHorizontal) {
        setFirstImageWidth(25)
        setSecondImageWidth(40)
      }
    }
  }}

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
  }
  return S.childNodes[imageIndex]
}

export function setProperWidths (S, activeImageIndex, slidesPositions) {

  const mqMobile = window.matchMedia("(max-width: 767px)").matches;
  // const mqLandscape = window.matchMedia( "(orientation: landscape)" );
  const mqTablet = window.matchMedia("(min-width: 768px)").matches && window.matchMedia("(max-width: 1024px)").matches

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


  if (mqMobile) { setMobileSizes() }
  else if (mqTablet) { setTabletSizes() }
  else { setDesktopSizes() }


  function setDesktopSizes () {
    getActiveImage().classList.remove('horizontalPic-mobile')
    setActiveImageHeight(100)

    if (isActiveHorizontal) {
      setActiveImageWidth(60)
      if (isFirstHorizontal) {
        setFirstImageWidth(40)
        setSecondImageWidth(0)
      }
      else if (isSecondHorizontal) {
        setSecondImageWidth(40)
        setFirstImageWidth(0)
      }
      else {
        setSecondImageWidth(20)
        setFirstImageWidth(20)
      }
    }
    else {
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
  }

  function setTabletSizes () {
    getActiveImage().classList.remove('horizontalPic-mobile')
    setActiveImageHeight(100)
    setFirstImageWidth(0)

    if (isActiveHorizontal) {
      if (isSecondHorizontal) {
        setActiveImageWidth(60)
        setSecondImageWidth(40)
      } else {
        setActiveImageWidth(70)
        setSecondImageWidth(30)
      }
    } else if (isSecondHorizontal) {
      setActiveImageWidth(50)
      setSecondImageWidth(50)
    } else {
      setActiveImageWidth(60)
      setSecondImageWidth(40)
    }
  }

  function setMobileSizes () {
    if (isActiveHorizontal) {
      setActiveImageWidth(100)
      setActiveImageHeight(66)
      getActiveImage().classList.add('horizontalPic-mobile')
      setFirstImageWidth(0)
      setSecondImageWidth(0)
    }
    else {
      setActiveImageWidth(85)
      setFirstImageWidth(0)
      setSecondImageWidth(0)
    }
  }

}

/* else if (mqMobile.matches && mqLandscape.matches) {
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

} */

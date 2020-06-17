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




export function setProperWidths (S, activeImageIndex, slidesPositions, mobileViewport) {
  const mq = window.matchMedia( "(max-width: 768px)" );
  const isFirstHorizontal = slidesPositions[getFirstImageIndex(S, activeImageIndex)]
  const isSecondHorizontal = slidesPositions[getSecondImageIndex(S, activeImageIndex)]
  const isActiveHorizontal = slidesPositions[activeImageIndex]

  const getFirstImage = () => getImage(S, activeImageIndex, 1)
  const getSecondImage = () => getImage(S, activeImageIndex, 2)
  const getActiveImage = () => getImage(S, activeImageIndex, 3)

  const setFirstImageWidth = (percentageWidth) => getFirstImage().style.width = percentageWidth + '%'
  const setSecondImageWidth = (percentageWidth) => getSecondImage().style.width = percentageWidth + '%'
  const setActiveImageWidth = (percentageWidth) => getActiveImage().style.width = percentageWidth + '%'

  if (mq.matches) {
    setActiveImageWidth(90)
    setFirstImageWidth(0)
    setSecondImageWidth(0)
  } else{
    if (isActiveHorizontal) {
      setActiveImageWidth(60)

      if (isFirstHorizontal) {
        setFirstImageWidth(40)
        setSecondImageWidth(0)
      } else if (isSecondHorizontal) {
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

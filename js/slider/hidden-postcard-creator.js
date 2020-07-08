export function createHiddenPostcard(postcardDetails = {
  title: 'Pozdrowienia z Malty',
  p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dolor sem, facilisis ac lectus luctus, tempus congue libero. Donec id risus a lorem commodo dictum. Nam sit amet pellentesque lacus. Aenean pellentesque dolor felis, vel pretium nunc efficitur euismod. Duis ac dolor ante. Vestibulum tortor diam, gravida a cursus non, pellentesque eget ipsum. Suspendisse potenti. Morbi eget nibh magna. Nulla ex turpis, gravida ac risus ac, pretium laoreet libero. Maecenas posuere tristique malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
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

  const footer = document.createElement('div')
  const textContainer = document.createElement('div')
  textContainer.innerText = postcardDetails.footer
  footer.width = '100%'
  footer.appendChild(textContainer)
  footer.classList.add('hidden-postcard-footer')

  postcardContent.appendChild(footer)
  return postCardDiv
}

export function createHiddenPostcardParis(postcardDetails) {
  const postCardDiv = document.createElement('div')
  postCardDiv.classList.add('hidden-postcard')

  const postcardContent = document.createElement('div')
  postcardContent.classList.add('hidden-postcard-content')
  postCardDiv.appendChild(postcardContent)


  const p1 = document.createElement('p')
  p1.innerText = postcardDetails.p1
  p1.classList.add('hidden-postcard-paragraph')
  p1.style.textAlign = 'left'
  p1.style.fontStyle = 'italic'
  p1.style.fontSize = '18px'
  postcardContent.appendChild(p1)

  const p2 = document.createElement('p')
  p2.innerText = postcardDetails.p2
  p2.classList.add('hidden-postcard-paragraph')
  p2.style.textAlign = 'left'
  p2.style.fontStyle = 'italic'
  p2.style.fontSize = '18px'

  postcardContent.appendChild(p2)

  const p3 = document.createElement('p')
  p3.innerText = postcardDetails.p3
  p3.classList.add('hidden-postcard-paragraph')
  p3.style.textAlign = 'left'
  p3.style.fontStyle = 'italic'
  p3.style.fontSize = '18px'

  postcardContent.appendChild(p3)


  return postCardDiv
}

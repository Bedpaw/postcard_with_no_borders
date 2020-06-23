export function createHiddenPostcard(postcardDetails = {
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

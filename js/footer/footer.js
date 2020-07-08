function createNavButton ({ passiveText, activeText, passiveClass, activeClass }) {

  const footerButton = document.createElement('div')
  footerButton.classList.add('nav-btn', passiveClass)
  footerButton.innerText = passiveText

  footerButton.addEventListener("click", () => {
    if (IsAnyNavButtonOpen() === false) {
      footerButton.classList.add(activeClass);
      footerButton.innerHTML = activeText
      footerButton.style.cursor = 'default'
      // deleteCursorFromAllButtons()
      addEventListenerForQuitButton(footerButton, passiveText)
    }
  })

  return footerButton
  }

export default function createNav(htmlElem, buttonsDetails) {
  const navBar = document.querySelector("nav");
  buttonsDetails.map( (buttonDetail) => {
    const navButton = createNavButton(buttonDetail)
    navBar.appendChild(navButton);

  })
}

function IsAnyNavButtonOpen() {
  let isOpen = false
  const navBar = document.querySelector("nav");
  navBar.childNodes.forEach(button => {
    if (button.classList.contains('nav-btn-active')) {
      isOpen = true
    }
  })
  return isOpen
}

function deleteCursorFromAllButtons() {
  const navBar = document.querySelector("nav");
  navBar.childNodes.forEach(button => {
      button.style.cursor = 'default';
    })
}

function addCursorForAllButtons() {
  const navBar = document.querySelector("nav");
  navBar.childNodes.forEach(button => {
      button.style.cursor = 'pointer'
    })
}

function addEventListenerForQuitButton(target, passiveText) {
  const exitSign = target.getElementsByClassName('x-nav-button')[0]

  exitSign.addEventListener('click', e => {
      target.classList.remove('nav-btn-active');
      target.innerText = passiveText
      addCursorForAllButtons()
      e.stopPropagation()
  })
}


function createNavButton ({ passiveText, activeText, passiveClass, activeClass }) {
    const toggleInnerText = elem => elem.innerText === passiveText ? elem.innerText = activeText : elem.innerText = passiveText

    const footerButton = document.createElement('button')
    footerButton.classList.add('nav-btn', passiveClass)
    footerButton.innerText = passiveText
    footerButton.addEventListener("click", () => {
      footerButton.classList.toggle(activeClass);
      toggleInnerText(footerButton);
    })
    return footerButton
  }

export function createNav(htmlElem, buttonsDetails) {
  const navBar = document.querySelector("nav");
  buttonsDetails.map( (buttonDetail) => {
    const navButton = createNavButton(buttonDetail)
    navBar.appendChild(navButton);
  })
}

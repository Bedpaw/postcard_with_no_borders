function createNavButton ({ passiveText, activeText, passiveClass, activeClass }) {
    const toggleInnerText = elem => elem.innerText === passiveText ? elem.innerHTML = activeText : elem.innerText = passiveText

    const footerButton = document.createElement('div')
    footerButton.classList.add('nav-btn', passiveClass)
    footerButton.innerText = passiveText
    footerButton.addEventListener("click", () => {
      footerButton.classList.toggle(activeClass);
      toggleInnerText(footerButton);
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

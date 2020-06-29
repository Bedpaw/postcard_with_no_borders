import {about, howToHelp, contacts, projectAim} from './nav-buttons-details.js'
//const createElems = (htmlElemsArray) => htmlElemsArray.map( htmlElem => document.createElement(htmlElem))

export function createAbout (activeText) {
  const htmlElems = createElems('div', 'div', 'p', 'p', 'p', 'p', 'div')
  const styles = ['nav-button-container', 'nav-button-title', 'nav-button-paragraph','nav-button-paragraph','nav-button-paragraph','nav-button-paragraph', '']
  for (let i = 0; i > htmlElems.length; i++) {
    if (i !== 6) {
      htmlElems[i].classList.add(styles[i])
      htmlElems[i].innerText = activeText[i]
    }

  }
  console.log(htmlElems)
}
function createHowToHelp (activeText) {
  createElems();
}
export const navButtonsCreators = [ createAbout(about), createHowToHelp(howToHelp), createActionAim(contacts), createContacts(projectAim)]

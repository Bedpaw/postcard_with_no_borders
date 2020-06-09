const navButtons = [
  {
    passiveText: 'O co chodzi',
    activeText:
      " Chcesz dowiedzieć się, o co w tym chodzi i stać się w te wakacje częścią czegoś niesamowitego? " +
      " W skrócie: wesprzesz ważny cel, a co więcej, w tym roku wybierzesz się nie w jedną, a w aż trzy wakacyjne podróże." +
      " Czego potrzebujesz? Nieco wyobraźni, długopisu albo pióra i chęci, by pomóc. Razem sprawimy, że te wakacje staną się niezapomniane " +
      " Pocztówki od wielu, wielu lat cieszą się popularnością. O ile pisanie listów już dawno zastąpiły maile czy SMS-y, to te kartoniki ze zdjęciami wciąż zachowały swój urok." +
      " Jest coś magicznego w wysyłaniu kartki z odległego miejsca. Tak samo uśmiech pojawia się na naszych twarzach, gdy to my znajdujemy taką pocztówkę w swojej skrzynce. " +
      " Pandemia pokrzyżowała plany każdemu z nas. W tym te wakacyjne. Ale w tym roku całą Polską możemy wykorzystać magię pocztówek, by zrobić coś dobrego dla siebie i innych:" +
      " Wesprzemy służbę zdrowia Stworzymy niesamowite wakacyjne wspomnienia.",
    passiveClass: 'about-event',
    activeClass: 'nav-btn-active'
  },
  {
    passiveText: 'Jak pomóc?',
    activeText:
    " Zasady akcji są proste. Każda osoba, która otrzyma pocztówkę, będzie nominowana do wpłaty kwoty na zbiórkę wspierającą lekarzy i wysłania pocztówek do 3 kolejnych osób." +
      " A każda z tych osób wyśle pocztówki kolejnym 3 znajomym… i tak akcja rozprzestrzeni się na całą Polskę (a kto wie – może i poza jej granice?)." +
    " Pocztówkę można wypełnić w dowolny sposób:" +
    " odbyć podróż w czasie, opisać wakacje sprzed kilku lat i wysłać kartkę do znajomego, który jest częścią tych wakacyjnych wspomnień" +
    " w wyobraźni przenieść się do wymarzonego miejsca, które w tym roku miało być wakacyjnym celem." +
      " Zresztą do dyspozycji są aż 3 pocztówki – na każdej może być opisana inna wyjątkowa podróż" +
    " napisać o siedzeniu w domu i planach wakacyjnych na czasy po pandemii" +
    " uwolnić swoje artystyczne ambicje – narysować coś na odwrocie kartki, napisać szaloną wakacyjną historię… "+
    " Nie ma żadnych ograniczeń!",
    passiveClass: 'how-to-help',
    activeClass: 'nav-btn-active'
  },
  {
    passiveText: 'Cel',
    activeText:
    " Wszystkie uzyskane środki będą przekazywane na służbę zdrowia. A co z kosztem samych pocztówek i ich wysyłki? No właśnie, tutaj liczymy na Waszą pomoc!" +
    " Chcemy, by uczestnicy pocztówkowej akcji nie musieli dodatkowo ponosić kosztów związanych z zakupem kartek i znaczków." +
    " Obecnie naszym celem jest więc zebranie środków na stworzenie 1000 pakietów pocztówkowych, w których znajdą się 3 kartki i 3 znaczki." +
    " Dzięki temu każdy uczestnik akcji będzie musiał jedynie wpłacić kwotę na rzecz służby zdrowia, korzystając z linku (pojawi się on na stronie, gdy wystartujemy z całym projektem)." +
    " Po przesłaniu dowodu wpłaty otrzyma od nas pakiet pocztówkowy." +
    " Obecnie prowadzimy zrzutkę, która pozwoli nam na przygotowanie pakietów startowych, a tym samym – na wystartowanie z całą akcją. " +
    " Jeśli chcesz nas wesprzeć, zajrzyj tutaj [tu link]. Każda złotówka ma znaczenie. ",
    passiveClass: 'event-aim',
    activeClass: 'nav-btn-active'
  },
  {
    passiveText: 'Kontakt',
    activeText: 'bla bla bla',
    passiveClass: 'contact',
    activeClass: 'nav-btn-active'
  },
]

createNav('nav', navButtons);


function createNavButton ({ passiveText, activeText, passiveClass, activeClass }) {
  const toggleInnerText = elem => elem.innerText === passiveText ? elem.innerText = activeText : elem.innerText = passiveText

  const footerButton = document.createElement('button')
  footerButton.classList.add('nav-btn', passiveClass)
  footerButton.innerText = passiveText
  footerButton.addEventListener("click", () => {
    footerButton.classList.toggle(activeClass);
    footerButton.classList.toggle('nav-btn');
    toggleInnerText(footerButton);
  })
  return footerButton
}

function createNav(htmlElem, buttonsDetails) {
  const navBar = document.querySelector(htmlElem);
  buttonsDetails.map( (buttonDetail) => {
    const navButton = createNavButton(buttonDetail)
    navBar.appendChild(navButton);
  })
}

//// Slider

const images = [
  {
    src: 'styles/postcards/greece.jpg',
    active: false,
  },
  {
    src: 'styles/postcards/indie.jpg',
    active: false,
  },
  {
  src: 'styles/postcards/rusia.jpg',
  active: false,
  },
  {
    src: 'styles/postcards/baloons.jpg',
    active: true,
  },
]

function createSlideDiv(image) {

  const slideDiv = document.createElement('div')
  slideDiv.classList.add('slide')

  const slideImg = document.createElement('img')
  slideImg.classList.add('slide-img')
  if (image.active) slideImg.classList.add('active')

  slideImg.src = image.src
  slideImg.alt = 'slide'

  slideDiv.appendChild(slideImg)
  return slideDiv
}
function createSlider(htmlElem, imagesDetails) {
  let slides = []
  let activeImageIndex = 0
  const slider = document.getElementsByClassName(htmlElem)[0]

  imagesDetails.map((imageDetail) => {
    const slideDiv = createSlideDiv(imageDetail)
    slides.push(slideDiv)
  })

  slider.appendChild(slides[activeImageIndex])
  slider.appendChild(slides[activeImageIndex + 1])
  slider.appendChild(slides[activeImageIndex + 2])
  slider.appendChild(slides[activeImageIndex + 3])


  const activeImageDiv = slider.lastChild
  activeImageDiv.classList.add('active')
}

createSlider('slider', images);



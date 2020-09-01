//TAB NAV (NAVEGAÇÃO POR TABS)
function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li')
  const tabContent = document.querySelectorAll('.js-tabcontent section')

  tabContent[0].classList.add('active') //Ao entrar no site, o conteudo da primeira imagem já vai esta carregado

  if (tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach((content) => {
        content.classList.remove('active')
      })
      tabContent[index].classList.add('active')
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index)
      })
    })
  }
}

initTabNav()

//ACCORDION LIST
function initAccordionList() {
  const accordinList = document.querySelectorAll('.js-accordion dt')
  const activeList = 'active'

  if (accordinList.length) { //verificar se existe o .js-accordion dt, caso não exista, vai da erro.
    accordinList[0].classList.add(activeList)
    accordinList[0].nextElementSibling.classList.add(activeList)

    function activeAccordion() {
      this.classList.toggle(activeList)
      this.nextElementSibling.classList.toggle(activeList)
    }

    accordinList.forEach((item) => {
      item.addEventListener('click', activeAccordion)
    })
  }
}

initAccordionList()

//SCROLL ANIMATION

function initScrollAnimation() {
  const sections = document.querySelectorAll('.js-scroll')
  const windowMetade = window.innerHeight * 0.6

  if (sections.length) {
    function scrollAnimation() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        const sectionVisible = (sectionTop - windowMetade) < 0
        if (sectionVisible) {
          section.classList.add('active')
        } else {
          section.classList.remove('active')
        }
      })
    }

    scrollAnimation()

    window.addEventListener('scroll', scrollAnimation)
  }
}

initScrollAnimation()
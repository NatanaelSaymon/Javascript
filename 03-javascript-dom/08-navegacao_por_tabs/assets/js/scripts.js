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
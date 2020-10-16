export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-anima="menu"] li')
  const tabContent = document.querySelectorAll('[data-anima="content"] section')

  tabContent[0].classList.add('active') //Ao entrar no site, o conteudo da primeira imagem já vai esta carregado

  if (tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach((content) => {
        content.classList.remove('active')
      })
      const animalSelecionado = tabContent[index].dataset.anima
      tabContent[index].classList.add('active', animalSelecionado)
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index)
      })
    })
  }
}
// Verifique a distância da primeira imagem
// em relação ao topo da página

const imgTop = document.querySelector('img')
console.log(imgTop.offsetTop)

// Retorne a soma da largura de todas as imagens
function somaImagens() {
  const allImg = document.querySelectorAll('img')

  let totalWidth = 0
  allImg.forEach((img) => {
    totalWidth += img.offsetWidth
  })

  console.log("A soma da largura de todas as imagens é: ", totalWidth)
}

window.onload = function () {
  somaImagens()
}


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a')
links.forEach((link) => {
  const linkWidth = link.offsetWidth
  const linkHeight = link.offsetHeight

  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, 'Possi boa acessibilidade')
  } else {
    console.log(link, 'Não possui boa acessibildiade')
  }
})



// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const widthBrowser = window.innerWidth
const menu = document.querySelector('.menu')

if (widthBrowser < 720) {
  menu.classList.add('menu-mobile')
} else {
  console.log('Largura da tela: ', widthBrowser)
}
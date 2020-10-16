//HEIGHT / WIDTH Estas são propriedades e metodos dos objetos ELEMENT e HTMLELEMENT.

//Variaveis  de teste
const animaisLista = document.querySelector('.animais-lista')

//retorna a altura + padding
const heightPadding = animaisLista.clientHeight

//retorna a altura + padding + border
const heightPaddingBorder = animaisLista.offsetHeight

// OFFSETTOP / OFFSETLEFT 
// offsetTop: retorna a distancia entre o topo do elemento e o topo da pagina
// offsetLeft: retorna a distancia entre o canto esquerdo do elemento e o canto esquerdo da pagina

const animaisTop = animaisLista.offsetTop
const animaisLeft = animaisLista.offsetLeft
console.log(animaisTop, animaisLeft)

//GETBOUNDINGCLIENTRECT(): Metodo que retorna um objeto com valores de width, height, distancia do elemento e mais.

const rect = animaisLista.getBoundingClientRect()
console.log(
  rect.width,
  rect.height,
)

//WINDOW

console.log(
  window.innerHeight,
  window.innerWidth,
  window.pageYOffset,
  window.pageXOffset,
)

if (window.innerWidth < 600) {
  console.log('Tela menor que 600px')
}

//MATCHMEDIA() : da para utlizar media-query como no CSS para verificar a largura do browser

const small = window.matchMedia('(max-width: 600px)')

if (small.matches) {
  console.log('Usuario mobile')
} else {
  console.log('Usuario desktop')
}
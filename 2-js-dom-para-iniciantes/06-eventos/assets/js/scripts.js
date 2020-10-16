//EVENTOS

//É boa prática separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anônima

const img = document.querySelector('img')

function callback() {
  console.log('Clicou')
}

// img.addEventListener("click", callback)

//Event
const animaisLista = document.querySelector('.animais-lista')

function listaAnimal(event) {
  console.log(event)

  //Propriedades dos eventos
  console.log(event.currentTarget) //Mostra o elemento que está sendo clicado
  console.log(event.target) //Onde o click ocorreu
  console.log(event.type) //tipo de evento
  console.log(event.path) //caminho
}

// animaisLista.addEventListener("click", listaAnimal)

//Diferentes eventos

// const h1 = document.querySelector('h1')

// function callbackEventos(event) {
//   console.log('Voce apertou a letra: ', event.key)
// }

// h1.addEventListener('click', callbackEventos)
// h1.addEventListener('mouseenter', callbackEventos)
// h1.addEventListener('mousemove', callbackEventos)

// window.addEventListener('scroll', callbackEventos)
// window.addEventListener('resize', callbackEventos)
// window.addEventListener('keydown', callbackEventos)

// window.addEventListener('keydown', callbackEventos)


// EXERCICIO

// Quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna o comportamento padrão desses links.
const linksInternos = document.querySelectorAll('a[href^="#"]')

function addAtivo(event) {
  event.preventDefault();

  linksInternos.forEach((link) => {
    link.classList.remove('ativo')
  })
  this.classList.add('ativo')

}
linksInternos.forEach((link) => {
  link.addEventListener('click', addAtivo)
})


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados.
const allElements = document.querySelectorAll('body *')

function showElement(event) {
  event.currentTarget.remove()
}

allElements.forEach((item) => {
  item.addEventListener('click', showElement)
})


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function clickT(event) {
  if (event.key === 't' || event.key === 'T') {
    document.documentElement.classList.toggle('texto-maior')
  }
}
window.addEventListener('keydown', clickT)
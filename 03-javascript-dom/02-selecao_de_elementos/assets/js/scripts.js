// //SELETOR UNICO

// //querySelector: retorna o primeiro elemento que combina com o seu seletor CSS

// const animaisDescricao = document.querySelector('.animais-descricao')
// console.log(animaisDescricao)

// //Retorna a sessão que tem a classe esquilo
// const animal = document.querySelector('section.esquilo')
// console.log(animal)

// //Retornando um link especifico
// const link = document.querySelector('[href^="#"]')
// console.log(link)



// //SELETOR GERAL LISTA
// const listaUl = document.querySelectorAll('ul') //Retorna uma NodeList
// console.log(listaUl)

// const images = document.querySelectorAll('img') //Retorna uma NodeList
// console.log(images)

// //HTMLcollection
// const gridSectionHTML = document.getElementsByClassName('grid-section')
// console.log(gridSectionHTML)

// //Nodelist
// const gridSelectionNode = document.querySelectorAll('.grid-section')
// console.log(gridSelectionNode)

// //Array Like (HTMLCollection e NodeList são array like, parecem array mais não são.)
// const gridSection = document.querySelectorAll('.grid-section')
// gridSection.forEach(function (gridItem, index) {
//   console.log(gridItem)
// })



// //É possivel transformar qualquer array-like em um Array Real, utilizando o metodo (Array.from(nome_do_array_like))
// const gridArray = Array.from(gridSectionHTML)



// Retorne no console todas as imagens do site
const allImage = document.querySelectorAll('img')
const arrayImage = Array.from(allImage)

arrayImage.forEach(function (item) {
  console.log(item)
})

// Retorne no console apenas as imagens que começaram com a palavra imagem
const palavraImage = document.querySelectorAll('[alt^="Imagem"]')
const arrayPalavra = Array.from(palavraImage)

arrayPalavra.forEach(function (item) {
  console.log("Essa imagem começa com a palavra Imagem", item)
})

// Selecione todos os links internos (onde o href começa com #)
const linkInterno = document.querySelectorAll('[href^="#"]')
const arrayLinkInterno = Array.from(linkInterno)

arrayLinkInterno.forEach(function (link) {
  console.log(link)
})

// Selecione o primeiro h2 dentro de .animais-descricao
const h2 = document.querySelector('h2')
console.log(h2)

// Selecione o último p do site
const allP = document.querySelectorAll('p')
const lastP = allP[allP.length - 1]
console.log("Esse é a ultima tag P do site:", lastP)
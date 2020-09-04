//Todas as 3 opções selecionam a mesma div
const div = document.querySelector('div')
// const div = document.querySelector('[data-color]')
// const div = document.querySelector('[data-color="azul"]')

div.dataset.height = 1000 //inserindo nova propriedade

console.log(div.dataset)
console.log(div.dataset.color)



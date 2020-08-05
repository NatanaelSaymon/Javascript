//TRANSVERSING E MANIPULAÇÃO

const h1 = document.querySelector('h1')

// h1.innerText = "Novo titulo"
// console.log(h1.outerHTML)
// console.log(h1.innerHTML)

const lista = document.querySelector('.animais-lista')

// console.log(lista.parentElement) // pai
// console.log(lista.parentElement.parentElement) // pai do pai
// console.log(lista.previousElementSibling) // elemento acima
// console.log(lista.nextElementSibling) // elemento abaixo

// console.log(lista.children) //HTMLCollection com os filhos
// console.log(lista.children[0]) //primeiro filho
// console.log(lista.children[--lista.children.length]) //retorna o ultimo filho

const ul = lista.querySelectorAll('li') // todas as LI's
const last_ul = lista.querySelector('li:last-child')

ul.forEach((item) => {
  console.log(item)
})

console.log('Ultimo filho: ', last_ul)
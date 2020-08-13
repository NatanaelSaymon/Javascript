const animaisListas = [
  "cachorro",
  "gato",
  "lobo",
  "leão"
]

const ulLista = document.querySelectorAll('li')

// const arrayLista = Array.prototype.slice.call(ulLista)

const arrayList = Array.from(ulLista)

const Carro = {
  marca: 'Ford',
  preco: 2000,
  acelerar() {
    return true
  }
}
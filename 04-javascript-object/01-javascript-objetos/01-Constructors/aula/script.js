// function Carro(marcaAtribuida, precoAtribuido) {
//   this.marca = marcaAtribuida
//   this.preco = precoAtribuido
// }

// const honda = new Carro('Honda', 10000)
// const fiat = new Carro('Fiat', 8000)

// function Honda(modeloAtribuido, valorAtribuido) {
//   const taxa = 1.8
//   const precoFinal = valorAtribuido * taxa
//   this.modelo = modeloAtribuido
//   this.valor = precoFinal
// }

// const carro = new Honda("Honda Civic", 20000)
// console.log(carro)

// const lista = {
//   selector: 'li',
//   element() {
//     return elementSelected = document.querySelector(this.selector)
//   },
//   active() {
//     return this.element().classList.add('active')
//   }
// }

// lista.active()
// lista.selector = 'ul'
// lista.active()

function ElementDom(selector) {
  const element = document.querySelector(selector)
  this.active = function (classe) {
    element.classList.add(classe)
  }
}

const elementSelected = new ElementDom('ul')
elementSelected.active('active')
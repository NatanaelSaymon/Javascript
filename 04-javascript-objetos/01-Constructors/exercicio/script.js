// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
}

function Pessoa(nomeAtribuido, idadeAtribuida) {
  this.nome = nomeAtribuido
  this.idade = idadeAtribuida

  this.andar = function (acao) {
    return `${this.nome} ${acao}!`
  }
}

const usuario = new Pessoa('Natanael', 28)
console.log(usuario.andar('andou'))

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const usuario2 = new Pessoa('João', 20)
console.log(usuario2)

const usuario3 = new Pessoa('Bruno', 15)
console.log(usuario3)


// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(elementSelected) {
  this.element = document.querySelectorAll(elementSelected)
  this.addClass = function (classe) {
    this.element.forEach((item) => {
      item.classList.add(classe)
    })
  }
  this.removeClass = function (classe) {
    this.element.forEach((item) => {
      item.classList.remove(classe)
    })
  }
}

const elementoDom = new Dom('li')
elementoDom.addClass('active')
elementoDom.removeClass('active')
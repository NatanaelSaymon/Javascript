// Crie uma função construtora de Pessoas Deve conter nome, sobrenome e idade
function Pessoa(nome, sobrenome, idade) {
  this.nome = nome
  this.sobrenome = sobrenome
  this.idade = idade
}


// Crie um método no protótipo que retorne o nome completo da pessoa
Pessoa.prototype.nameCompleto = function () {
  return `${this.nome} ${this.sobrenome}`
}

const usuario = new Pessoa("Natanael", "Saymon", 28)
console.log(usuario.nameCompleto())


// Liste os métodos acessados por dados criados com NodeList, HTMLCollection, Document
console.log(NodeList.prototype)
console.log(HTMLCollection.prototype)
console.log(Document.prototype)


// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li //li.constructor.name "HTMLLIElement"
li.click //li.click.constructor.name "Function"
li.innerText //li.innerText.constructor.name "String"
li.value //li.value.constructor.name "Number"
li.hidden //li.hidden.constructor.name "Boolean"
li.offsetLeft //li.offsetLeft.constructor.name "Number"
li.click() // undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name //String
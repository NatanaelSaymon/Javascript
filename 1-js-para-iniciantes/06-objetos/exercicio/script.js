// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var usuario = {
  nome: "Natanael",
  sobrenome: "Saymon",
  sexo: "Masculino"
}

// Crie um método no objeto anterior, que mostre o seu nome completo
usuario.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`
}
console.log(usuario.nomeCompleto())

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000

//usando um metodo
carro.precoMaior = function () {
  return `${this.preco = 3000}`
}
console.log(carro.precoMaior())

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var verHomem = true

var cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: "10",
  latir(verHomem) {
    if (verHomem == true) {
      return `Latiu`
    } else {
      return `Não Latiu`
    }
  }
}
console.log(cachorro.raca)
console.log(cachorro.latir(verHomem))
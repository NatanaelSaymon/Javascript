// Crie uma função para verificar se um valor é Truthy

function verificaIdade(idade) {
  if (idade > 18) {
    return true
  } else {
    return false
  }
}

console.log(verificaIdade(28))

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(lado) {
  const somaPerimetro = lado * 4
  return somaPerimetro
}

console.log(perimetroQuadrado(5))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  const nomeCompleto = `${nome} ${sobrenome}`
  return nomeCompleto
}

console.log(nomeCompleto("Natanael", "Saymon"))

// Crie uma função que verifica se um número é par

function parImpar(numero) {
  if (numero % 2 == 0) {
    return `O numero ${numero} é Par`
  } else {
    return `O numero ${numero} é Impar`
  }
}

console.log(parImpar(8))

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipo(dado) {
  return `${typeof dado}`
}

console.log(tipo("Natan"))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

window.addEventListener("scroll", function () {
  console.log("Natanael Saymon")
})

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  var totalPaises = 193;
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20))
console.log(jaVisitei(20))
// Retorne um número aleatório
// entre 1050 e 2000

let valorMax = 2000
let valorMin = 1050

let resultado = Math.floor(Math.random() * (valorMax - valorMin + 1) + valorMin)
console.log(`Exercicio 01 - Número aleatorio: ${resultado}`)


// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';

const arrayNumeros = numeros.split(',')

console.log(`Exercicio 02 - O maior numero é: ${Math.max(...arrayNumeros)}`)


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = [
  'R$ 59,99',
  ' R$ 100,222',
  'R$ 230  ',
  'r$  200'
];

let somaTotal = 0

function limpaPreco(preco) {
  preco = +preco.toUpperCase().replace("R$", "").replace(",", ".").trim()
  preco = +preco.toFixed(2)
  return preco
}

listaPrecos.forEach((preco) => {
  somaTotal += limpaPreco(preco)
})

console.log(somaTotal.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL'
}))
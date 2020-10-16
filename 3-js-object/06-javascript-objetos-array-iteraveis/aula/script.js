//FOREACH() : a função de callback é executada para cada item da array. 
//Possiu 3 argumentos: Item(valor do item do array) | Index(index do array) | Array (array original)

const carros = ['Ford', 'Fiat', 'Honda']

carros.forEach((item, index, array) => {
  console.log(item.toUpperCase()) //SAIDA: FORD, FIAT, HONDA
})

//Sempre vai retornar undefined, por quer o objetivo do foreach é o que iremos fazer com o item dentro do foreach
const retornoForEach = carros.forEach((item, index, array) => {
  item.toUpperCase()
})

console.log(retornoForEach) // SAIDA: undefined



//ARROW FUNCTION
const li = document.querySelectorAll('li')

//ARROW FUNCTION - FORMA OTIMIZADA
li.forEach((i) => i.classList.add('active'))



//MAP() : funciona da mesma forma que o forEach(), porém ao invez de retornar UNDEFINED, retorna um novo array com valores atualizados de acordo com o return de cada iteração.
const carros2 = ['Ferrari', 'Lamborghine', 'Ford']

const newCarros2 = carros2.map((item) => {
  return item.toUpperCase()
})

console.log(carros2)
console.log(newCarros2)



//MAP() COM OBJETOS
const aulas = [{
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const tempoAulas = aulas.map(aula => aula.min);
// [15, 10, 20, 25];

// Forma normal
// const puxasNomes = function(aula){
//   return aula.nome
// }

//Forma otimizada
const puxarNomes = aula => aula.nome;

const nomesAulas = aulas.map(puxarNomes);
// ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']



//REDUCE()

const valores = [10, 20, 30]

const total = valores.reduce((acumulador, item) => {
  return acumulador + item
}, 0)

console.log(total) //SAIDA: 60

const numeros = [10, 5, 25, 40]

const maiorNumero = numeros.reduce((anterior, atual) => {
  if (anterior > atual) {
    return anterior
  } else {
    return atual
  }
}, 0)

const menorNumero = numeros.reduce((anterior, atual) => {
  if (anterior < atual) {
    return anterior
  } else {
    return atual
  }
}, 0)

console.log(maiorNumero)
console.log(menorNumero)
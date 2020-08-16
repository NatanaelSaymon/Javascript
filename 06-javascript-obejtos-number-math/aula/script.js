// number.parseFloat() : serve para retornar um numero a partir de uma string. A string deve começar com numeros
let valor = '50.787 reais'

console.log(Number.parseFloat(valor)) //50.787



// number.parseInteger() : transforma o numero em integral.
let valor2 = '45.78'
console.log(Number.parseInt(valor2)) //45



// nuber.toFixed(DECIMAIS) : arredonda o número com base no total de casas decimais do argumento. OBS: RETORNA UMA STRING
// adicione o "+" na frente da variavel para retornar um numero.
let valor3 = 2.99
console.log(+valor3.toFixed()) //3

let valor4 = 100.488
console.log(+valor4.toFixed(2)) //100.49



//number.toLocaleString(lang, options) : Formata o número de acordo com a língua e opções passadas.

const preco = 59.78

console.log(preco.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})) // R$ 59,78 <-- Brasil

console.log(preco.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD'
})) // $59.78 <-- Americano



//MATH.ABS(), MATH.CEIL(), MATH.FLOOR() E MATH.ROUND()
//abs()   : retorna o valor absoluto, ou seja, transforma negativo em positivo. 
//ceil()  : arredonda para cima, retornando sempre uma integral.
//floor() : arredonda para baixo.
//round() : arredonda para o número integral mais próximo.

console.log(Math.abs(-4.7)) // 4.7
console.log(Math.ceil(4.7)) // 5
console.log(Math.floor(4.3)) // 4
console.log(Math.round(4.9)) // 5



//MATH.MAX(), MATH.MIN() E MATH.RANDOM();
//max()    : retorna o maior número de uma lista de argumentos
//min()    : retorna o menor número de uma lista de argumentos
//random() : retorna um número aleatório entre 0 e 1.

console.log(Math.max(44, 55, 99, 789, 54))
console.log(Math.min(4, 8, 45, 6))
console.log(Math.random() * 10)



const aleatorio = Math.random() * 10
console.log(+aleatorio.toFixed())

//Numero aleatiro entre 70 e 30

let maximo = 70
let minimo = 30

console.log(Math.floor(Math.random() * (maximo - minimo + 1) + minimo))
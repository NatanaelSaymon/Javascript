// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total)

// Crie duas expressões que retornem NaN
var letras = "N A T A N"
console.log(+letras)

// Somar a string '200' com o número 50 e retornar 250
var somaString = "200"
console.log(+somaString + 50)

// Incremente o número 5 e retorne o seu valor incrementado
var incremento = 5
incremento++
console.log(incremento)

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = +numero / 2; // NaN (Not a Number)
console.log(pesoPorDois)
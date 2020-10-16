//OBJETO - STRING

const comida = 'Pizza'
const game = 'O melhor game!'
console.log(comida.toLowerCase()) //minuscula
console.log(comida.toUpperCase()) //maiuscula
console.log(comida.length) //tamanho total
console.log(comida[comida.length - 1]) //ultimo caractere

//METODO CHARAT()
//retorna o caracter de acordo com o index de (n)
console.log(game.charAt(game.length - 1)) //ultimo caractere



//METODO CONCAT()
//concatena as strings e retorna o resultado
const linguagem = 'Javascript'
const frase = 'A melhor linguagem é '
const fraseCompleta = frase.concat(linguagem, '!!!')
console.log(fraseCompleta)



//METODO INCLUDES()
//procura pela string exata dentro de uma outra string, a busca é case sensitive
const frutas = ["banana", "laranja", "maçã", "melancia"]
const fruta = "uva"

if (frutas.includes(fruta) == false) {
  frutas.push(fruta)
}
console.log(frutas)



//METODO SLICE(start, end)
//Corta a string de acordo com os valores de start e end

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(0, 3)); // Dep
console.log(transacao2.slice(0, 3)); // Dep
console.log(transacao3.slice(0, 3)); // Tax

console.log(transacao1.slice(12)); // cliente
console.log(transacao1.slice(-4)); // ente
console.log(transacao1.slice(3, 6)); // ósi



//METODO INDEXOF()
//retorna o index da string, assim que achar o priimeiro resultado ele já retorna. No caso do lastIndexOf ele retorna o ultimo resultado.

const jogo = 'Anthem'

console.log(jogo.indexOf('A'))
console.log(jogo.indexOf('m')) //retorna o ultimo index
console.log(jogo.lastIndexOf('e'))



//STR.PADSTART(N, STR) E STR.PADEND(N, STR)
//Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres. O preenchimento é feito com espaços, caso não seja declarado o segundo argumento.
const listaPrecos = ['R$ 99.00', 'R$ 199.00', 'R$ 999.00', 'R$ 9999.00', 'R$ 99999.00']

listaPrecos.forEach((item) => {
  console.log('Valores alinhados', item.padStart(20, '.'))
})

listaPrecos.forEach((item) => {
  console.log(item.padEnd(10, '.'))
})

//STR.REPLACE(REGEXP|SUBSTR, NEWSTR|FUNCTION)
//Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar.

let listaItens = 'Jogos Series Filmes Cinema'
listaItens = listaItens.replace(/[ ]+/g, ', ')
console.log(listaItens)

let valor = 'R$ 1245,05'
valor = valor.replace(',', '.')



//STR.SPLIT(PADRAO)
//Divide a string de acordo com o padrão passado e retorna uma array.

let listaItens2 = 'Jogos Series Filmes Cinema'
listaItens2 = listaItens2.replace(/[ ]+/g, ', ')
const arrayListaItens2 = listaItens2.split(', ') //transforma a lista em um array e quebra odne tem virgula
console.log(arrayListaItens2)

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
console.log(htmlArray)
const htmlNovo = htmlArray.join('section');
console.log(htmlNovo)


//STR.TOLOWERCASE() E STR.TOUPPERCASE()
//Retorna a string em letras maiúsculas ou minúsculas. Bom para verificarmos input de usuários.
const sexo1 = 'MaScUlInO'
const sexo2 = 'masculino'
const sexo3 = 'MASCULINO'

console.log(sexo1.toLowerCase())
console.log(sexo2.toUpperCase())
console.log(sexo3.toLowerCase())


//STR.TRIM(), STR.TRIMSTART(), STR.TRIMEND()
//Remove espaço em branco do início ou final de uma string.

const divida = ' R$ 230.00 '
console.log(divida.trim())
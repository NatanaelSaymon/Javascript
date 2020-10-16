<div class="center" style="text-align :center;">

# JAVASCRIPT

</div>

## VARIÁVEIS

Responsáveis por guardar dados na memória. Inicia com a palavra **var, let ou const**

```js
var nome = "Natan";
let idade = 28;
const possuiFaculdade = true;
```

## VÍRGULA

Utilizei a vírgula para criar mais de uma variável, sem repetir a palavra chave var.

```JS
var nome = 'Natanael',
    idade = 28,
    possuiFaculdade = true;

```

## VARIÁVEIS SEM VALOR

Pode declarar ela e não atribuir valor inicialmente.

```js
var precoAplicativo;
// retorna undefined
```

## NOME

Os nomes podem iniciar com \$, \_, ou letras.

- Podem conter números mas não iniciar com eles

- Case sensitive

- nome é diferente de Nome

- Camel case

- É comum nomearmos assim: abrirModal

```JS
// Inválido
var §nome;
var function;
var 1possuiFaculdade;

// Válido
var $selecionar;
var _nome;
var possuiFaculdadeNoExterior;
```

## MUDAR O VALOR ATRIBUÍDO

É possível mudar os valores atribuídos a variáveis declaradas com **var e let**. Porém não é possível modificar valores das declaradas com **const**

```js
var idade = 28;
idade = 29;

let preco = 50;
preco = 25;

const possuiFaculdade = true;
possuiFaculdade = false;
// Retorna um erro
```

---

## TIPOS DE DADOS

**7 TIPOS DE DADOS**

Todos são primitivos exceto os objetos.

```js
let nome = "Natan"; // String
let idade = 28; // Number
let possuiFaculdade = true; // Boolean
let time; // Undefined
let comida = null; // Null
let simbolo = Symbol(); // Symbol
let novoObjeto = {}; // Object
```

## VERIFICANDO O TIPO DE DADO

```js
var nome = "Natan";
console.log(typeof nome);
// retorna string
```

_typeof null retorna object_

---

## Operadores

```js
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4
```

_Lembrando que soma + em Strings serve para concatenar_

## OPERADORES ARITMÉTICOS (STRINGS)

```js
var soma = "100" + 50; // 10050
var subtracao = "100" - 50; // 50
var multiplicacao = "100" * "2"; // 200
var divisao = "Comprei 10" / 2; // NaN (Not a Number)
```

_É possível verificar se uma variável é NaN ou não com a função isNaN()_

## NAN = NOT A NUMBER

```js
var numero = 80;
var unidade = "kg";
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)
```

## A ORDEM IMPORTA

Começa por **multiplicação** e **divisão**, depois por **soma** e **subtração**.

```js
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = (20 / 2) * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40
```

_Parênteses para priorizar uma expressão_

## OPERADORES ARITMÉTICOS UNÁRIOS

```js
var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6
```

## OPERADORES ARITMÉTICOS UNÁRIOS

O **+** e **-** tenta transformar o valor seguinte em número

```js
var frase = "Isso é um teste";
+frase; // NaN
-frase; // NaN

var idade = "28";
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1
```

**O - "sinal de menos" antes de um número torna ele negativo**

---

## BOOLEAN e CONDICIONAIS

**BOOLEAN**

Existem dois valores booleanos **false** ou **true**.

```js
var possuiGraduacao = true;
var possuiDoutorado = false;
```

**CONDICIONAIS IF E ELSE**

Verificar se uma expressão é verdadeira com if, caso contrário o else será ativado.

```js
var possuiGraduacao = true;

if (possuiGraduacao) {
  console.log("Possui graduação");
} else {
  console.log("Não possui graduação");
}
// retorna Possui Graduação e não executa o else
```

O valor dentro dos parênteses sempre será avaliado em false ou true.

**SWITCH**

Com o switch você pode verificar se uma variável é igual à diferentes valores utilizando o case. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave break; para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira.

```JS
var consoleFavorito = 'Xbox';

switch (corFavorita) {
  case 'Xbox':
    console.log('Vamos jogar Forza');
    break;
  case 'PS4':
    console.log('Vamos jogar Ovewatch');
    break;
  case 'Switch':
    console.log('Vamos jogar Pokemon');
    break;
  default:
    console.log('Fortnite');
}
```

**OPERADOR LÓGICO DE NEGAÇÃO !**

O operador !, nega uma operação booleana. Ou seja, !true é igual a false

```js
// Truthy
if(!true) // false
if(!1) // false
if(!'') // true
if(!undefined) // true
if(!!' ') // true
if(!!'') // false
```

_Dica, você pode utilizar o !! para verificar se uma expressão é Truthy ou Falsy_

Vão sempre retornar um valor booleano

```js
10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10; // true
10 >= 11; // false
```

**OPERADORES DE COMPARAÇÃO**

O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===

```js
10 == "10"; // true
10 == 10; // true
10 === "10"; // false
10 === 10; // true
10 != 15; // true
10 != "10"; // false
10 !== "10"; // true
```

---

## FUNÇÕES

Bloco de código que pode sr executado e reutilziado. Valores podem ser passados por uma função e a mesma retorna outro valor.

```js
function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado(4); // 16
areaQuadrado(5); // 25
areaQuadrado(2); // 4
```

**PARÂMETROS E ARGUMENTO**

Ao **criar** uma função, você pode definir **parâmetros**.

Ao **executar** uma função, você pode passar **argumentos**.

```js
// peso e altura são os parâmetros
function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}

console.log(imc(80, 1.8)); // 80 e 1.80 são os argumentos
console.log(imc(60, 1.7)); // 60 e 1.70 são os argumentos
```

**PARENTESES EXECUTA A FUNÇÃO**

```js
function corFavorita(cor) {
  if (cor === "azul") {
    return "Você gosta do céu";
  } else if (cor === "verde") {
    return "Você gosta de mato";
  } else {
    return "Você não gosta de nada";
  }
}
corFavorita(); // retorna 'Você não gosta de nada'
```

_Se apenas definirmos a função com o function e não executarmos a mesma, nada que estiver dentro dela irá acontecer_

**ARGUMENTOS PODEM SER FUNÇÕES**

Chamadas de Callback, geralmente são funções que ocorrem após algum evento.

```js
addEventListener("click", function () {
  console.log("Clicou");
});
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima
```

Funções anônimas são aquelas em que o nome da função não é definido, escritas como **function() {}** ou **() => {}**

**ESCOPO**

Variáveis e funções definidas dentro de um bloco **{}**, não são visíveis fora dele.

```js
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`;
}
console.log(totalPaises); // erro, totalPaises não definido
```

## OBEJTOS

Conjuntos de variaveis e funções, que são chamadas de propriedades e métodos. Declaração de Objetos **let pessoa = {}**

```js
var pessoa = {
  nome: "Natanael",
  idade: 28,
  profissao: "Desenvolvedor Web",
  possuiFaculdade: true,
};

pessoa.nome; // 'Natanael'
pessoa.possuiFaculdade; // true
```

_Propriedades e métodos consistem em nome (chave) e valor_

**MÉTODOS**

É uma propriedade que possui uma função no local do seu valor.

```js
var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20
```

Abreviação de area: function() {} para area() {}, no ES6+

```js
var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
};
```

Todo Metodo retorna um objeto!

Ex: **getBoundingClientRect()**

_Esse metodo retorna varias propriedades, como: width, height, etc. Então se quisermos somente a altura do elemento basta pegar somente a propriedade que retorna a altura(height). Console.log(rect.height)_

```js
let nome = "Natan";
console.log(nome.toLowerCase());
console.log(nome.length);

/*
toLowerCase(): é um metodo.
length: é uma propriedade.
*/
```

**DOT NOTATION GET**

Acesse propriedades de um objeto utilizando o ponto **.**

```js
var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
};

var bg = menu.backgroundColor; // '#84E'
```

Substitua o valor de uma propriedade utilizando . e o = após o nome da mesma.

```js
var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
};

menu.backgroundColor = "#000";
console.log(menu.backgroundColor); // '#000'
```

**ADICIONAR PROPRIEDADES E MÉTODOS**

Basta adicionar um novo nome e definir o valor.

```js
var menu = {
  width: 800,
};

menu.height = 50;
menu.position = "fixed";
```

**PALAVRA-CHAVE THIS**

this irá fazer uma referência ao próprio objeto.

```js
var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  },
};

menu.metadeHeight(); // 25
// sem o this, seria 60
```

## OPERADORES DE ATRIBUIÇÃO

Podem funcionar como formas abreviadas

```js
var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)
```

## ARRAY

É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em um unica variavel.

```js
var videoGames = ["Switch", "PS4", "XBox"];

videoGames[0]; // Switch
videoGames[2]; // Xbox
```

_Acesse um elemento do array utilizando o []_

**METODOS E PROPRIEDADE DE UM ARRAY**

```js
var videoGames = ["Switch", "PS4", "XBox"];

videoGames.pop(); // Remove o último item e retorna ele
videoGames.push("3DS"); // Adiciona ao final da array
videoGames.length; // 3
```

_Existem diversos outros métodos, como map, reduce, forEach e mais que veremos mais à frente_

**FOR LOOP**

Fazem algo repetidamente até que uma condição seja atingida.

```js
for (let n = 0; n < 10; n++) {
  console.log(n);
}
// Retorna de 0 a 9 no console
```

_O for loop possui 3 partes, início, condição e incremento_

**ARRAYS E LOOP**

```js
var videoGames = ["Switch", "PS4", "XBox", "3DS"];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
}
```

**BREAK**

O loop irá parar caso encontre o comando **Break**.

```js
var videoGames = ["Switch", "PS4", "XBox", "3DS"];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if (videoGames[i] === "PS4") {
    break;
  }
}
```

**FOREACH**

ForEach é um metodo que executa uma função para cada item do Array. É uma forma mais simples de utilizarmos um loop com arrays
(ou array-like).

```js
var videoGames = ["Switch", "PS4", "XBox", "3DS"];
videoGames.forEach(function (item) {
  console.log(item);
});
// O argumento item será atribuído dinamicamente
```

_Podemos passar os seguintes parâmetros **item**, **index** e **array** ._

## Operador Ternario

Abreviação de condicionais com if e else

```js
var idade = 19;
var podeBeber = idade >= 18 ? "Pode beber" : "Não pode beber";
console.log(podeBeber); // Pode beber

// condição ? true : false
```

_Geralmente utilizado quando precisamos atribuir um valor para uma variável, dependendo de uma condição_

## ESCOPO

**ESCOPO DE FUNÇÃO**

Variáveis declaradas dentro de funções não são acessadas fora das mesmas.

```js
function mostrarCarro() {
  var carro = "Fusca";
  console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined
```

_Escopo evita o conflito entre nomes._

**VARIÁVEL GLOBAL (ERRO)**

Declarar variáveis sem a palavra chave **var**, **const** ou **let**, cria uma variável que pode ser acessar em qualquer escopo (global). Isso é um erro.

```js
function mostrarCarro() {
  carro = "Fusca";
  console.log(carro);
}

mostrarCarro(); // Fusca
console.log(carro); // Fusca
```

**ESCOPO DE FUNÇÃO (PAI)**

Variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções.

```js
var carro = "Fusca";

function mostrarCarro() {
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}

mostrarCarro(); // Meu carro é um Fusca
console.log(carro); // Fusca
```

**ESCOPO DE BLOCO**

Variáveis criadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declarmos uma variável é utilizando const e let, pois estas respeitam o escopo de bloco.

```js
if (true) {
  var carro = "Fusca";
  console.log(carro);
}
console.log(carro); // Carro
```

**VAR VAZA O BLOCO**

Mesmo com a condição falsa, a variável ainda será declarada utilizando hoisting e o valor ficará como undefined.

```js
if (false) {
  var carro = "Fusca";
  console.log(carro);
}
console.log(carro); // undefined
```

**CONST E LET NO LUGAR DE VAR**

A partir de agora utilize apenas **const** e **let** para declarmos variáveis.

```js
if (true) {
  const carro = "Fusca";
  console.log(carro);
}
console.log(carro); // erro, carro is not defined
```

**{} CRIA UM BLOCO**

Chaves {} criam um escopo de bloco, não confundir com a criação de objetos = {}

```js
{
  var carro = "Fusca";
  const ano = 2018;
}
console.log(carro); // Carro
console.log(ano); // erro ano is not defined
```

**FOR LOOP**

Ao utilizar var dentro de um forloop, que é um bloco, o valor do variável utilizada irá vazar e existir fora do loop.

```js
for (var i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i); // 10
```

**FOR LOOP COM LET**

Com o **let** evitamos que o número vaze.

```js
for (let i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i); // i is not defined
```

**CONST**

Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código.

```js
const mes = 'Dezembro';
mes = 'Janeiro'; // erro, tentou modificar o valor
const semana; // erro, declarou sem valor

const data = {
  dia: 28,
  mes: 'Dezembro',
  ano: 2018,
}

data.dia = 29; // Funciona
data = 'Janeiro'; // erro

```

_Variáveis com valores constantes devem utilizar o const._

**LET**

Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável.

```js
let ano;
ano = 2018;
ano++;
console.log(ano); // 2019

let ano = 2020; // erro, redeclarou a variável
```


<p align="center">

# JAVASCRIPT - DOM

</p>

## DOCUMENT OBJECT MODEL (DOM)

É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.

```js
console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propriedades

window.innerHeight; // retorna a altura do browser
```

_Ao inspecionar elemento com o Chrome, você está vendo a representação oficial do DOM._

<p align="center">

<img src="https://www.origamid.com/slide/javascript-completo-es6/aulas/03-dom-para-iniciantes/0301-o-que-e-o-dom/dom.svg" width="60%">

</p>

**WINDOW E DOCUMENT**

São os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.

**Bom**: window | **Dom**: document

- Para acessar itens do Browser: **window.addEventListener( )**
- Para acessar itens do Documento: **document.addEventListener( )**

```js
window.alert("Isso é um alerta");
alert("Isso é um alerta"); // Funciona

document.querySelector("h1"); // Seleciona o primeiro h1
document.body; // Retorna o body
```

_window é o objeto global, por isso não precisamos chamar ele na frente dos seus métodos e propriedades._

**NODE**

Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node.

```js
const titulo = document.querySelector("h1");

titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;

titulo.addEventListener("click", callback);
// ativa a função callback ao click no titulo
```

**ID**

**getElementById** seleciona e retorna elementos do DOM

```js
// Seleciona pelo ID
const animaisSection = document.getElementById("animais");
const contatoSection = document.getElementById("contato");

// Retorna null caso não exista
const naoExiste = document.getElementById("teste");
```

**CLASSE E TAG**

**getElementsByClassName** e **getElementsByTagName** selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada.

```js
// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName("grid-section");
const contato = document.getElementsByClassName("grid-section contato");

// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName("ul");

// Retorna o primeiro elemento
console.log(gridSection[0]);
```

**SELETOR GERAL E UNICO**

**querySelector** retorna o primeiro elemento que combinar com o seu seletor CSS.

```js
const animais = document.querySelector(".animais");
const contato = document.querySelector("#contato");
const ultimoItem = document.querySelector(".animais-lista li:last-child");
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector("ul");

// Busca dentro do Ul apenas
const navItem = primeiroUl.querySelector("li");
```

**SELETOR GERAL LISTA**

**querySelectorAll** retorna todos os elementos compatíveis com o seletor CSS em uma NodeList.

```js
const gridSection = document.querySelectorAll(".grid-section");
const listas = document.querySelectorAll("ul");
const titulos = document.querySelectorAll(".titulo");
const fotosAnimais = document.querySelectorAll(".animais-lista img");

// Retorna o segundo elemento
console.log(gridSection[1]);
```

**HTMLCOLLECTION VS NODELIST**

A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com querySelectorAll é estática.

```js
const titulo = document.querySelector(".titulo");
const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section");

titulo.classList.add("grid-section");

console.log(gridSectionHTML); // 4 itens
console.log(gridSectionNode); // 3 itens
```

**ARRAY-LIKE**

HTMLCollection e NodeList são array-like, parecem uma array mas não são. O método de Array forEach() por exemplo, existe apenas em NodeList.

```JS
const gridSection = document.querySelectorAll('.grid-section');

gridSection.forEach(function(gridItem, index, array) {
  gridItem.classList.add('azul');
  console.log(index) // index do item na array
  console.log(array) // a array completa
});

```

_É possível transformar array-like em uma Array real, utilizando o método Array.from(gridSection)_

## FOREACH E ARROWFUNCTION

**FOREACH**

Constantemente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos é utilizando o método forEach.

```js
const imgs = document.querySelectorAll("img");

imgs.forEach(function (item) {
  console.log(item);
});
```

**PARAMETROS DO FOREACH**

O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. Esse função pode receber três parâmetros: valorAtual, index e array;

```JS
const imgs = document.querySelectorAll('img');

imgs.forEach(function(valorAtual, index, array){
  console.log(item); // o item atual no loop
  console.log(index); // o número do index
  console.log(array); // a Array completa
});

```

**FOREACH E ARRAY**

forEach é um método de Array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transformá-los em uma array.

```JS
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
  console.log(item);
});

```

**ARROW FUNCTION**

Sintaxe curta em relação a function expression. Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos.

```JS
const imgs = document.querySelectorAll('img');

imgs.forEach((item) => {
  console.log(item);
});

```

**ARGUMENTOS E PARENTESES**

```JS
const imgs = document.querySelectorAll('img');

// argumento único não precisa de parênteses
imgs.forEach(item => {
  console.log(item);
});

// multiplos argumentos precisam de parênteses
imgs.forEach((item, index) => {
  console.log(item, index);
});

// sem argumentos precisa dos parênteses, mesmo vazio
let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

```

**RETURN**

É possível omitir as chaves {} para uma função que retorna uma linha.

```JS
const imgs = document.querySelectorAll('img');

imgs.forEach(item =>
  console.log(item)
);

imgs.forEach(item => console.log(item));

```

_Não é permitido fechar a linha com ;_

**CLASSLIST**

Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém.

```JS
const menu = document.querySelector('.menu');

menu.className; // string
menu.classList; // lista de classes
menu.classList.add('ativo');
menu.classList.add('ativo', 'mobile'); // duas classes
menu.classList.remove('ativo');
menu.classList.toggle('ativo'); // adiciona/remove a classe
menu.classList.contains('ativo'); // true ou false
menu.classList.replace('ativo', 'inativo');
```

**ATTRIBUTE**

Retorna um array-like com os atributos do elemento

```js
const animais = document.querySelector(".animais");

animais.attributes; // retorna todos os atributos
animais.attributes[0]; // retorna o primeiro atributo
```

**GETATTRIBUTE E SETATTRIBUTE**

Métodos que retornam ou definem de acordo com o atributo selecionado

```js
const img = document.querySelector("img");

img.getAttribute("src"); // valor do src
img.setAttribute("alt", "Texto Alternativo"); // muda o alt
img.hasAttribute("id"); // true / false
img.removeAttribute("alt"); // remove o alt

img.hasAttributes(); // true / false se tem algum atributo
```

## DIMENSÕES E DISTÂNCIA

**HEIGHT E WIDTH**

Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only.

```js
const section = document.querySelector(".animais");

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll
```

**OFFSETTOP E OFFSETLEFT**

```js
const section = document.querySelector(".animais");

// Distância entre o topo do elemento e o topo da página
section.offsetTop;

// Distância entre o canto esquerdo do elemento
// e o canto esquerdo da página
section.offsetLeft;
```

**GETBOUNDINGCLIENTRECT()**

Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.

```js
const section = document.querySelector(".animais");

const rect = section.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll
```

**WINDOW**

```js
window.innerWidth; // width do janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height do janela
window.outerWidth; // soma a barra de endereço

window.pageYOffset; // distância total do scroll horizontal
window.pageXOffset; // distância total do scroll vertical

if (window.innerWidth < 600) {
  console.log("Tela menor que 600px");
}
```

**MATCHMEDIA();**

Utilize um media-querie como no CSS para verificar a largura do browser

```js
const small = window.matchMedia("(max-width: 600px)");

if (small.matches) {
  console.log("Tela menor que 600px");
} else {
  console.log("Tela maior que 600px");
}
```

## ADDEVENTLISTENER

Adiciona uma função ao elemento, que é chamado de **Callback**, que será ativada assim que um certo evento ocorrer ensse elemento.

```js
const img = document.querySelector("img");

// elemento.addEventListener(event, callback, options)
img.addEventListener("click", function () {
  console.log("Clicou");
});
```

_Todo (addEventListener) dispara uma função._

**CALLBACK**

É boa prática separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anônima

```JS
const img = document.querySelector('img');
function callback() {
  console.log('Clicou');
}

img.addEventListener('click', callback); // Correto 🚀

img.addEventListener('click', callback()); // Errado, resultado: undefined
```

**EVENT**

O primeiro parâmetro do callback é referente ao evento que ocorreu.

```js
const img = document.querySelector("img");

function callback(event) {
  console.log(event);
}

img.addEventListener("click", callback);
```

**PROPRIEDADES DO EVENT**

```js
const animaisLista = document.querySelector(".animais-lista");

function executarCallback(event) {
  const currentTarget = event.currentTarget; // this
  const target = event.target; // onde o clique ocorreu
  const type = event.type; // tipo de evento
  const path = event.path;
  console.log(currentTarget, target, type, path);
}

animaisLista.addEventListener("click", executarCallback);
```

**EVENT.PREVENTDEFAULT()**

Previne o comportamento padrão do evento no browser. No caso de um link externo, por exemplo, irá previnir que o link seja ativado.

```js
const linkExterno = document.querySelector('a[href^="http"]');

function clickNoLink(event) {
  event.preventDefault();
  console.log(event.currentTarget.href);
}

linkExterno.addEventListener("click", clickNoLink);
```

**THIS**

A palavra chave this é uma palavra especial de JavaScript, que pode fazer referência a diferentes objetos dependendo do contexto. No caso de eventos, ela fará referência ao elemento em que addEventListener foi adicionado.

```js
const img = document.querySelector("img");

function callback(event) {
  console.log(this); // retorna a imagem
  console.log(this.getAttribute("src"));
}

img.addEventListener("click", callback);
```

_Geralmente igual ao event.currentTarget_

**DIFERENTES EVENTOS**

Existem diversos eventos como **click**, **scroll**, **resize**, **keydown**, **keyup**, **mouseenter** e mais. Eventos podem ser adicionados a diferentes elementos, como o **window** e **document** também.

```js
const h1 = document.querySelector("h1");

function callback(event) {
  console.log(event.type, event);
}

h1.addEventListener("click", callback);
h1.addEventListener("mouseenter", callback);
window.addEventListener("scroll", callback);
window.addEventListener("resize", callback);
window.addEventListener("keydown", callback);
```

**KEYBORD**

Você pode adicionar atalhos para facilitar a navegação no seu site, através de eventos do keyboard.

```JS
function handleKeyboard(event) {
  if(event.key === 'a')
    document.body.classList.toggle('azul');
  else if(event.key === 'v')
    document.body.classList.toggle('vermelho');
}

window.addEventListener('keydown', callback);

```

**FOREACH E EVENTOS**

O método addEventListener é adicionado à um único elemento, então é necessário um loop entre elementos de uma lista, para adicionarmos à cada um deles.

```JS
const imgs = document.querySelectorAll('img');

function imgSrc(event) {
  const src = event.currentTarget.getAttribute('src');
  console.log(src);
}

imgs.forEach((img) => {
  img.addEventListener('click', imgSrc);
});

```

## TRANSVERSING E MANIPULAÇÃO

**OUTERHTML, INNERHTML E INNERTEXT**

Propriedades que retornam uma string contendo um HMTL ou um texto. É possivel atribuir um novo valor para as mesmas. Ex: **element.innerText = "novo texto"**

```js
const menu = document.querySelector(".menu");

menu.outerHTML; // todo o html do elemento
menu.innerHTML; // html interno
menu.innerText; // texto, sem tags

menu.innerText = "<p>Texto</p>"; // a tag vai como texto
menu.innerHTML = "<p>Texto</p>"; // a tag é renderizada
```

**TRANSVERSING**

Como navegar pelo DOM, utilizando suas propriedades e metodos.

```js
const lista = document.querySelector(".animais-lista");

lista.parentElement; // pai
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento acima
lista.nextElementSibling; // elemento abaixo
lista.children; // HTMLCollection com os filhos
lista.children[0]; // primeiro filho
lista.children[--lista.children.length]; // último filho
lista.querySelectorAll("li"); // todas as LI's
lista.querySelector("li:last-child"); // último filho
```


# OBJETOS - CONSTRUCTORS FUNCTIONS

## OBJETOS

Criar um objeto é simples, basta definirmos uma variável e iniciar a definição do seu valor com chaves {}. Mas e se precisarmos criar um novo objeto, com as mesmas características do anterior? É possível com o Object.create, mas veremos ele mais tarde.

```js
const carro = {
  marca: "Marca",
  preco: 0,
};

const honda = carro;
honda.marca = "Honda";
honda.preco = 4000;

const fiat = carro;
fiat.marca = "Fiat";
fiat.preco = 3000;
```

_carro, fiat e honda apontam para o mesmo objeto._

## CONSTRUCTOR FUNCTIONS

Para isso existem as Constructor Functions, ou seja, Funções Construtoras que são responsáveis por construir novos objetos sempre que chamamos a mesma.

```js
function Carro() {
  this.marca = "Marca";
  this.preco = 0;
}

const honda = new Carro();
honda.marca = "Honda";
honda.preco = 4000;
const fiat = new Carro();
fiat.marca = "Fiat";
fiat.preco = 3000;
```

_Usar Pascal Case, ou seja, começar com letra maiúscula._

## NEW KEYWORD

A palavra chave new é responsável por criar um novo objeto baseado na função que passarmos a frente dela.

```js
const honda = new Carro();

// 1 Cria um novo objeto
honda = {};

// 2 Define o protótipo
honda.prototype = Carro.prototype;

// 3 Aponta a variável this para o objeto
this = honda;

// 4 Executa a função, substituindo this pelo objeto
honda.marca = "Marca";
honda.preco = 0;

// 5 Retorna o novo objeto
return (honda = {
  marca: "Marca",
  preco: 0,
});
```

## PARÂMETROS E ARGUMENTOS

Podemos passar argumentos que serão utilizados no momento da criação do objeto.

```js
function Carro(marca, preco) {
  this.marca = marca;
  this.preco = preco;
}

const honda = new Carro("Honda", 4000);
const fiat = new Carro("Fiat", 3000);
```

## THIS KEYWORD

O **this** faz referência ao próprio objeto construído com a Constructor Function.

```js
function Carro(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
  console.log(this);
}

const honda = new Carro("Honda", 2000);
```

_Variáveis dentro da Constructor estão "protegidas"._

## EXEMPLO REAL

Quando mudamos a propriedade seletor, o objeto Dom irá passar a selecionar o novo seletor em seus métodos.

```js
const Dom = {
  seletor: "li",
  element() {
    return document.querySelector(this.seletor);
  },
  ativo() {
    this.element().classList.add("ativo");
  },
};

Dom.ativo(); // adiciona ativo ao li
Dom.seletor = "ul";
Dom.ativo(); // adiciona ativo ao ul
```

## CONSTRUCTOR FUNCTION REAL

Um objeto criado com uma Constructor, não irá influenciar em outro objeto criado com a mesma Constructor.

```js
function Dom() {
  this.seletor = "li";
  const element = document.querySelector(this.seletor);
  this.ativo = function () {
    element.classList.add("ativo");
  };
}

const lista = new Dom();
lista.seletor = "ul";
lista.ativo();

const lastLi = new Dom();
lastLi.seletor = "li:last-child";
lastLi.ativo();
```

## LEMBRE-SE DE USAR PARÂMETROS

```js
function Dom(seletor) {
  const element = document.querySelector(seletor);
  this.ativo = function (classe) {
    element.classList.add(classe);
  };
}

const lista = new Dom("ul");
lista.ativo("ativo");

const lastLi = new Dom("li:last-child");
lastLi.ativo("ativo");
```

---

# OBEJTOS - STRING

É a construtora de strings, toda string possui as propriedades e métodos do prototype de String.

```js
const comida = "Pizza";
const liquido = new String("Água");
const ano = new String(2018);
```

## string.LENGTH

Propriedade com o total de caracteres da string.

```js
const comida = "Pizza";
const frase = "A melhor comida";

comida.length; // 5
frase.length; // 15

comida[0]; // P
frase[0]; // A
frase[frase.length - 1]; // a
```

## string.CHARAT(N)

Retorna o caracter de acordo com o index de (n).

```js
const linguagem = "JavaScript";

linguagem.charAt(0); // J
linguagem.charAt(2); // v
linguagem.charAt(linguagem.length - 1); // t
```

## string.CONCAT(string2, string3, ...)

Concatena as strings e retorna o resultado.

```js
const frase = "A melhor linguagem é ";
const linguagem = "JavaScript";

const fraseCompleta = frase.concat(linguagem, "!!");
```

## string.INCLUDES(SEARCH, POSITION)

Procura pela string exata dentro de outra string. A procura é case sensitive.

```js
const fruta = "Banana";
const listaFrutas = "Melancia, Banana, Laranja";

listaFrutas.includes(fruta); // true
fruta.includes(listaFrutas); // false
```

## string.ENDSWITH(SEARCH) E string.STARTSWITH(SEARCH)

Procura pela string exata dentro de outra string. A procura é case sensitive.

```js
const fruta = "Banana";

fruta.endsWith("nana"); // true
fruta.startsWith("Ba"); // true
fruta.startsWith("na"); // false
```

## string.SLICE(START, END)

Corta a string de acordo com os valores de start e end.

```js
const transacao1 = "Depósito de cliente";
const transacao2 = "Depósito de fornecedor";
const transacao3 = "Taxa de camisas";

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi
```

## string.SUBstringING(START, END)

Corta a string de acordo com os valores de start e end. Não funcionar com valores negativos como o slice.

```js
const linguagem = "JavaScript";
linguagem.substring(3, 5); // aS
linguagem.substring(0, 4); // Java
linguagem.substring(4); // Script
linguagem.substring(-3); // JavaScript
```

## string.INDEXOF(SEARCH) E string.LASTINDEXOF(SEARCH)

Retorna o index da string, assim que achar o primeiro resultado ele já retorna. No caso do lastIndexOf ele retorna o último resultado.

```js
const instrumento = "Guitarra";

instrumento.indexOf("r"); // 5
instrumento.lastIndexOf("r"); // 6
instrumento.indexOf("ta"); // 3
```

## string.PADSTART(N, string) E string.PADEND(N, string)

Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres. O preenchimento é feito com espaços, caso não seja declarado o segundo argumento.

```js
const listaPrecos = ["R$ 99", "R$ 199", "R$ 12000"];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, "."));
});

listaPrecos[0].padStart(10, "."); // .....R$ 99
listaPrecos[0].padEnd(10, "."); // R$ 99.....
```

## string.REPEAT(N)

Repete a string (n) vezes.

```js
const frase = "Ta";

frase.repeat(5); // TaTaTaTaTa
```

## string.REPLACE(REGEXP|SUBstring, NEWstring|FUNCTION)

Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar.

```js
let listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";
listaItens = listaItens.replace(/[ ]+/g, ", ");

let preco = "R$ 1200,43";
preco = preco.replace(",", "."); // 'R$ 1200.43'
```

## string.SPLIT(PADRAO)

Divide a string de acordo com o padrão passado e retorna uma array.

```js
const listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";
const arrayItens = listaItens.split(" ");

const htmlText = "<div>O melhor item</div><div>A melhor lista</div>";
const htmlArray = htmlText.split("div");
const htmlNovo = htmlArray.join("section");
```

## string.TOLOWERCASE() E string.TOUPPERCASE()

Retorna a string em letras maiúsculas ou minúsculas. Bom para verificarmos input de usuários.

```js
const sexo1 = "Feminino";
const sexo2 = "feminino";
const sexo3 = "FEMININO";

sexo1.toLowerCase() === "feminino"; // true
sexo2.toLowerCase() === "feminino"; // true
sexo3.toLowerCase() === "feminino"; // true
```

## string.TRIM(), string.TRIMSTART(), string.TRIMEND()

Remove espaço em branco do início ou final de uma string.

```js
const valor = "  R$ 23.00   ";
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'
```

# OBJETOS - NUMBER E MATH

## NUMBER

É a construtora de números, todo número possui as propriedades e métodos do prototype de Number. Number também possui alguns métodos.

```js
const ano = 2018;
const preco = new Number(99);
```

## NUMBER.ISNAN() E NUMBER.ISINTEGER();

isNaN() é um método de Number, ou seja, não faz parte to protótipo. isInteger() verifica se é uma integral.

```js
Number.isNaN(NaN); // true
Number.isNaN(4 + 5); // false

Number.isInteger(20); // true
Number.isInteger(23.6); // false
```

## NUMBER.PARSEFLOAT() E NUMBER.PARSEINT()

parseFloat() serve para retornarmos um número a partir de uma string. A String deve começar com um número. parseInt recebe também um segundo parâmetro que é o Radix, 10 é para decimal.

```js
parseFloat("99.50"); // Mesma função sem o Number
Number.parseFloat("99.50"); // 99.5
Number.parseFloat("100 Reais"); // 100
Number.parseFloat("R$ 100"); // NaN

parseInt("99.50", 10); // 99
parseInt(5.43434355555, 10); // 5
Number.parseInt("100 Reais", 10); // 100
```

## N.TOFIXED(DECIMAIS)

Arredonda o número com base no total de casas decimais do argumento.

```js
const preco = 2.99;
preco.toFixed(); // 3

const carro = 1000.455;
carro.toFixed(2); // 1000.46

const preco2 = 1499.49;
preco2.toFixed(); // 1499
```

## N.TOLOCALESTRING(LANG, OPTIONS);

Formata o número de acordo com a língua e opções passadas.

```js
const preco = 59.49;
preco.toLocaleString("en-US", { style: "currency", currency: "USD" }); // $59.49
preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }); // R$ 59,49
```

## MATH

É um Objeto nativo que possui propriedades e métodos de expressões matemáticas comuns.

```js
Math.PI; // 3.14159
Math.E; // 2.718
Math.LN10; // 2.303
```

## MATH.ABS(), MATH.CEIL(), MATH.FLOOR() E MATH.ROUND()

abs() retorna o valor absoluto, ou seja, transforma negativo em positivo. ceil() arredonda para cima, retornando sempre uma integral e floor para baixo. round() arredonda para o número integral mais próximo.

```js
Math.abs(-5.5); // 5.5
Math.ceil(4.8334); // 5
Math.ceil(4.3); // 5
Math.floor(4.8334); // 4
Math.floor(4.3); // 4
Math.round(4.8334); // 5
Math.round(4.3); // 4
```

## MATH.MAX(), MATH.MIN() E MATH.RANDOM();

max() retorna o maior número de uma lista de argumentos, min() o menor número e random() um número aleatório entre 0 e 1.

```js
Math.max(5, 3, 10, 42, 2); // 42
Math.min(5, 3, 10, 42, 2); // 2

Math.random(); // 0.XXX
Math.floor(Math.random() * 100); // entre 0 e 100
Math.floor(Math.random() * 500); // entre 0 e 500

// Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32;
Math.floor(Math.random() * (max - min + 1)) + min;
```

# OBJETO - ARRAY

## ARRAYS

Arrays armazenam uma coleção de elementos. Estes podem ser strings, arrays, boolean, number, functions, objects e mais.

```js
const instrumentos = ["Guitarra", "Baixo", "Violão"];
const precos = [49, 99, 69, 89];

const dados = [
  new String("Tipo 1"),
  ["Carro", "Portas", { cor: "Azul", preco: 2000 }],
  function andar(nome) {
    console.log(nome);
  },
];

dados[2]("Ford");
dados[1][2].cor; // azul
```

## CONSTRUÇÃO DE ARRAYS

Toda array herda os métodos e propriedades do protótipo do construtor Array.

```js
const instrumentos = ["Guitarra", "Baixo", "Violão"];
const carros = new Array("Corola", "Mustang", "Honda");

carros[1]; // Mustang
carros[2] = "Ferrari";
carros[10] = "Parati";
carros.length; // 11
```

_Os valores das array's não são estáticos_

## ARRAY.FROM()

Array.from() é um método utilizado para transformar array-like objects, em uma array.

```js
let li = document.querySelectorAll("li"); // NodeList
li = Array.from(li); // Array

const carros = {
  0: "Fiat",
  1: "Honda",
  2: "Ford",
  length: 4,
};

const carrosArray = Array.from(carros);
```

## ARRAY.ISARRAY()

Verifica se o valor passado é uma array e retorna um valor booleano.

```js
let li = document.querySelectorAll("li"); // NodeList
Array.isArray(li); // false

li = Array.from(li); // Array
Array.isArray(li); // true
```

## ARRAY.OF(), ARRAY() E NEW ARRAY()

Verifica se o valor passado é uma array e retorna um valor booleano. A palavra chave new não é necessária para utilizar o construtor Array.

```js
Array.of(10); // [10]
Array.of(1, 2, 3, 4); // [1,2,3,4]
new Array(5); // [,,,,]
Array(5); // [,,,,]
Array(1, 2, 3, 4); // [1,2,3,4]
```

## PROPRIEDADES E MÉTODOS DO PROTOTYPE

**[].length** retorna o tamanho da array.

```js
const frutas = ["Banana", "Pêra", ["Uva Roxa", "Uva Verde"]];
frutas.length; // 3

frutas[0].length; // 6
frutas[1].length; // 5
frutas[2].length; // 2
```

## MÉTODOS MODIFICADORES [].SORT()

Os próximos métodos que vamos falar sobre, são métodos modificadores (mutator methods). Além de retornarem um valor, eles modificam a array original. **[].sort()** organiza a pelo unicode.

```js
const instrumentos = ["Guitarra", "Baixo", "Violão"];
instrumentos.sort();
instrumentos; // ['Baixo', 'Guitarra', Violão]

const idades = [32, 21, 33, 43, 1, 12, 8];
idades.sort();
idades; // [1, 12, 21, 32, 33, 43, 8]
```

## [].UNSHIFT() E [].PUSH()

**[].unshift()** adiciona elementos ao início da array e retorna o length da mesma. **[].push()** adiciona elementos ao final da array e retorna o length da mesma.

```js
const carros = ["Ford", "Fiat", "VW"];
carros.unshift("Honda", "Kia"); // 5
carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

carros.push("Ferrari"); // 6
carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];
```

## [].SHIFT() E [].POP()

**[].shift()** remove o primeiro elemento da array e retorna o mesmo. **[].pop()** remove o último elemento da array e retorna o mesmo.

```js
const carros = ["Ford", "Fiat", "VW", "Honda"];
const primeiroCarro = carros.shift(); // 'Ford'
carros; // ['Fiat', 'VW', 'Honda'];

const ultimoCarro = carros.pop(); // 'Honda'
carros; // ['Fiat', 'VW'];
```

## [].REVERSE()

**[].reverse()** inverte os itens da array e retorna a nova array.

```js
const carros = ["Ford", "Fiat", "VW", "Honda"];
carros.reverse(); // ['Honda', 'VW', 'Fiat', 'Ford'];
```

## [].SPLICE()

**[].splice(index, remover, item1, item2, ...)** adiciona valores na array a partir do index. Remove a quantidade de itens que for passada no segundo parâmetro (retorna esses itens).

```js
const carros = ["Ford", "Fiat", "VW", "Honda"];
carros.splice(1, 0, "Kia", "Mustang"); // []
carros; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']

carros.splice(3, 2, "Ferrari"); // ['Fiat', 'VW']
carros; // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']
```

## [].COPYWITHIN()

**[].copyWithin(alvo, inicio, final)** a partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa cópia. Caso omita os valores de início e final, ele irá utilizar como inicio o 0 e final o valor total da array.

```js
["Item1", "Item2", "Item3", "Item4"].copyWithin(2, 0, 3);
// ['Item1', 'Item2', 'Item1', 'Item2']

["Item1", "Item2", "Item3", "Item4"].copyWithin(-1);
// ['Item1', 'Item2', 'Item3', 'Item1']
```

## [].FILL()

**[].fill(valor, inicio, final)** preenche a array com o valor, do início até o fim.

```js
["Item1", "Item2", "Item3", "Item4"].fill("Banana");
// ['Banana', 'Banana', 'Banana', 'Banana']

["Item1", "Item2", "Item3", "Item4"].fill("Banana", 2);
// ['Item1', 'Item2', 'Banana', 'Banana']

["Item1", "Item2", "Item3", "Item4"].fill("Banana", 1, 3);
// ['Item1', 'Banana', 'Banana', 'Item4']
```

## MÉTODOS DE ACESSO [].CONCAT()

Os métodos abaixo não modificam a array original, apenas retornam uma array modificada. **[].concat()** irá concatenar a array com o valor passado.

```js
const transporte1 = ["Barco", "Aviao"];
const transporte2 = ["Carro", "Moto"];
const transportes = transporte1.concat(transporte2);
// ['Barco', 'Aviao', 'Carro', 'Moto'];

const maisTransportes = [].concat(transporte1, transporte2, "Van");
// ['Barco', 'Aviao', 'Carro', 'Moto', 'Van'];
```

## [].INCLUDES(), [].INDEXOF() E [].LASTINDEXOF()

**[].includes(valor)** verifica se a array possui o valor e retorna true ou false. **[].indexOf(valor)** verifica se a array possui o valor e retorna o index do primeiro valor na array. Já o **[].lastIndexOf(valor)** retorna o index do último.

```js
const linguagens = ["html", "css", "js", "php", "python", "js"];

linguagens.includes("css"); // true
linguagens.includes("ruby"); // false
linguagens.indexOf("python"); // 4
linguagens.indexOf("js"); // 2
linguagens.lastIndexOf("js"); // 5
```

## [].JOIN()

**[].join(separador)** junta todos os valores da array e retorna uma string com eles. Se você passar um valor como parâmetro, este será utilizado durante a junção de cada item da array.

```js
const linguagens = ["html", "css", "js", "php", "python"];
linguagens.join(); // 'html,css,js,php,python'
linguagens.join(" "); // 'html css js php python'
linguagens.join("-_-"); // 'html-_-css-_-js-_-php-_-python'

let htmlString = "<h2>Título Principal</h2>";
htmlString = htmlString.split("h2");
// ['<', '>Título Principal</', '>']
htmlString = htmlString.join("h1");
// <h1>Título Principal</h1>
```

## [].SLICE()

**[].slice(inicio, final)** retorna os itens da array começando pelo início e indo até o valor de final.

```js
const linguagens = ["html", "css", "js", "php", "python"];
linguagens.slice(3); // ['php', 'python']
linguagens.slice(1, 4); // ['css', 'js', 'php']

const cloneLinguagens = linguagens.slice();
```

# OBJETOS - OBJECT

## OBJECT

Todo objeto é criado com o construtor Object e por isso herda as propriedades e métodos do seu prototype.

````JS
const carro = {
  marca: 'Ford',
  ano: 2018,
}

const pessoa = new Object({
  nome: 'André',
  idade: 28,
})

````


## MÉTODOS DE OBJECT

Object.create(obj, defineProperties) retorna um novo objeto que terá como protótipo o objeto do primeiro argumento.

````JS
const carro = {
  rodas: 4,
  init(marca) {
    this.marca = marca;
    return this;
  },
  acelerar() {
    return `${this.marca} acelerou as ${this.rodas} rodas`;
  },
  buzinar() {
    return this.marca + ' buzinou';
  }
}

const honda = Object.create(carro);
honda.init('Honda').acelerar();

````

## OBJECT.ASSIGN()

Object.assign(alvo, obj1, obj2) adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos. O assign irá modificar o objeto alvo.

````JS
const funcaoAutomovel = {
  acelerar() {
    return 'acelerou';
  },
  buzinar() {
    return 'buzinou';
  },
}

const moto = {
  rodas: 2,
  capacete: true,
}

const carro = {
  rodas: 4,
  mala: true,
}

Object.assign(moto, funcaoAutomovel);
Object.assign(carro, funcaoAutomovel);

````

## OBJECT.DEFINEPROPERTIES()

Object.defineProperties(alvo, propriedades) adiciona ao alvo novas propriedades. A diferença aqui é a possibilidade de serem definidas as características dessas propriedades.
 
````JS
const moto = {}
Object.defineProperties(moto, {
  rodas: {
    value: 2,
    configurable: false, // impede deletar e mudança de valor
    enumarable: true, // torna enumerável
  },
  capacete: {
    value: true,
    configurable: true,
    writable: false, // impede mudança de valor
  },
})

moto.rodas = 4;
delete moto.capacete;
moto;
// {rodas: 2}

````

## GET E SET

É possível definirmos diferentes comportamentos para get e set de uma propriedade. Lembrando que ao acionarmos uma propriedade obj.propriedade, a função get é ativada e ao setarmos ob.propriedade = 'Valor' a função de set é ativada.
 
````JS
const moto = {}
Object.defineProperties(moto, {
  velocidade: {
    get() {
      return this._velocidade;
    },
    set(valor) {
      this._velocidade = 'Velocidade ' + valor;
    }
  },
})

moto.velocidade = 200;
moto.velocidade;
// Velocidade 200

````

## OBJECT.GETOWNPROPERTYDESCRIPTORS(OBJ)

Lista todos os métodos e propriedades de um objeto, com as suas devidas configurações.
 
````JS
Object.getOwnPropertyDescriptors(Array);
// Lista com métodos e propriedades e Array

Object.getOwnPropertyDescriptors(Array.prototype);
// Lista com métodos e propriedades do protótipo de Array

Object.getOwnPropertyDescriptor(window, 'innerHeight');
// Puxa de uma única propriedade

````

## OBJECT.KEYS(OBJ), OBJECT.VALUES(OBJ) OBJECT.ENTRIES(OBJ)

Object.keys(obj) retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto. Object.values(obj) retorna uma array com os valores do objeto. Object.entries(obj) retorna uma array com array's contendo a chave e o valor.
 
````JS
Object.keys(Array);
// [] vazia, pois não possui propriedades enumeráveis

const carro = {
  marca: 'Ford',
  ano: 2018,
}
Object.keys(carro);
// ['marca', 'ano']
Object.values(carro);
// ['Ford', 2018]
Object.entries(carro);
// [['marca', 'Ford'], ['ano', 2018]]

````

## OBJECT.GETOWNPROPERTYNAMES(OBJ)

Retorna uma array com todas as propriedades diretas do objeto (não retorna as do protótipo).
 
````JS
Object.getOwnPropertyNames(Array);
// ['length', 'name', 'prototype', 'isArray', 'from', 'of']

Object.getOwnPropertyNames(Array.prototype);
// [..., 'filter', 'map', 'every', 'some', 'reduce', ...]

const carro = {
  marca: 'Ford',
  ano: 2018,
}
Object.getOwnPropertyNames(carro);
// ['marca', 'ano']

````

## OBJECT.FREEZE(), OBJECT.SEAL(), OBJECT.PREVENTEXTENSIONS()

Object.freeze() impede qualquer mudança nas propriedades. Object.seal() previne a adição de novas propriedades e impede que as atuais sejam deletadas. Object.preventExtensions() previne a adição de novas propriedades.
 
````JS
const carro = {
  marca: 'Ford',
  ano: 2018,
}
Object.freeze(carro);
Object.seal(carro);
Object.preventExtensions(carro);

Object.isFrozen(carro); // true
Object.isSealed(carro); // true
Object.isExtensible(carro); // true

````

## {}.TOSTRING()

Retorna o tipo do objeto. O problema é toString() ser uma função dos protótipos de Array, String e mais. Por isso é comum utilizarmos a função direto do Object.prototype.toString.call(valor).
 
````JS
const frutas = ['Banana', 'Uva'];
frutas.toString(); // 'Banana,Uva'
typeof frutas; // object
Object.prototype.toString.call(frutas); // [object Array]

const frase = 'Uma String';
frase.toString(); // 'Uma String'
typeof frase; // string
Object.prototype.toString.call(frase); // [object String]

const carro = {marca: 'Ford'};
carro.toString(); // [object Object]
typeof carro; // object
Object.prototype.toString.call(carro); // [object Object]

const li = document.querySelectorAll('li');
typeof li; // object
Object.prototype.toString.call(li); // [object NodeList]

````


# EFEITOS NO DOM

<br><br>

## DATASET

dataset é uma propriedade de HTMLElement, essa propriedade é um objeto do tipo DOMStringMap. Dentro desse objeto existe uma coleção de chave / valor, com todos os atributos do elemento html que começarem com data-.

````html
<div data-cor="azul" data-width="500">Uma Div</div>
<span data-anime="left" data-tempo="2000">Um Span</span>

````

````js
// Ambos os valores selecionam a mesma div acima.
let div = document.querySelector('div');
div = document.querySelector('[data-cor]');
div = document.querySelector('[data-cor="azul"]');

div.dataset;
// DOMStringMap {cor: "azul", width: "500"}
div.dataset.cor; // 'azul'
div.dataset.width; // '500'
div.dataset.tempo = 1000;
// DOMStringMap {cor: "azul", width: "500", tempo: "1000"}

````
<br><br>


## DATA ATRIBUTES

Os atributos e valores que começarem com data- poderão ser utilizados como forma de configuração de plugins e interações DOM / JS.

````html
<div data-anima="left" data-tempo="1000">Div 1</div>
<div data-anima="right" data-tempo="2000">Div 2</div>
````

````js
const divs = document.querySelectorAll('[data-anima]');
divs.forEach((div) => {
  div.classList.add(div.dataset.anima);
});

// adiciona em cada div
// uma classe com o mesmo nome
// que o valor de data
````
<br><br>


## DATA VS CLASS

A vantagem de se utilizar data atributes é que torna mais fácil evitarmos conflitos com estilos do CSS. Além de deixar a estrutura da tag mais organizada.

````html
<div data-anima="left" data-tempo="1000">Div 1</div>
<div class="anima-left tempo-1000">Div 2</div>
````
<br><br>


## NOMENCLATURA

Por padrão o JavaScript não aceita - (traço) como caracter válido para nomear propriedades. Então qualquer traço será removido e a letra seguinte transformada em maiúscula.

````html
<div data-anima-scroll="left">Div 1</div>
````

````js
const div = document.querySelector('[data-anima-scroll]');
div.dataset;
// {animaScroll: 'left'}
div.dataset.animaScroll; // left
div.dataset.tempoTotal = 1000;
// Na div vira data-tempo-total="1000"

delete div.dataset.animaScroll; // remove o atributo
````
<br><br>

## SetTimeOut e SetInterval

**SETTIMEOUT()**

setTimeout(callback, tempo, arg1, arg2, ...) método assíncrono que ativa o callback após tempo. Não existe garantia de que o código será executado exatamente após o tempo, pois o callback entra na fila e espera pela Call Stack estar vazia.

````js
function espera(texto) {
  console.log(texto);
}
setTimeout(espera, 1000, 'Depois de 1s');
````

**IMEDIATO**

Se não passarmos o argumento de tempo ele irá assumir o valor 0 e entrará na fila imediatamente para ser executado. Podemos passar uma função anônima diretamente com argumento.

````js
setTimeout(() => {
  console.log('Após 0s?');
});
````

**LOOPS E SETTIMEOUT**

Um loop é executado rapidamente, em milissegundos. Se colocarmos um setTimeout dentro do loop, todos eles serão adicionados à Web Api praticamente no mesmo tempo. Um evento de setTimeout não espera o tempo do anterior acabar para iniciar.

````js
for(let i = 0; i < 20; i++) {
  setTimeout(() => {
    console.log(i);
  }, 300);
}

````

**CORRIGINDO O LOOP**

Agora ele está multiplicando o tempo por i. Assim o primeiro aparecerá em 0ms, o segundo em 300ms, o terceiro em 600ms e assim em diante.

````js
for(let i = 0; i < 20; i++) {
  setTimeout(() => {
    console.log(i);
  }, 300 * i);
}
````

**THIS E WINDOW**

setTimeout é um método do objeto Window. O valor de this dentro do mesmo callback é uma referência ao seu objeto no caso Window.

````js
const btn = document.querySelector('button');
btn.addEventListener('click', handleClick);

function handleClick(event) {
  setTimeout(function() {
    this.classList.add('active');
  }, 1000)
}
// Erro pois window.classList não existe

````

**ARROW FUNCTION**

Quando utilizamos uma Arrow Function como callback, o contexto de this passa a ser do local onde o setTimeout foi iniciado.

````js
const btn = document.querySelector('button');
btn.addEventListener('click', handleClick);

// this agora é btn.
function handleClick(event) {
  setTimeout(() => {
    this.classList.add('active');
  }, 1000)
}
````

**SETINTERVAL**

setInterval(callback, tempo, arg1, arg2, ...), irá ativar o callback toda vez que a quantidade de tempo passar.

````js
function loop(texto) {
  console.log(texto);
}
setInterval(loop, 1000, 'Passou 1s');

// loop a cada segundo
let i = 0;
setInterval(() => {
  console.log(i++);
}, 1000);

````

**CLEARINTERVAL**

clearInterval(var), podemos parar um intervalo com o clearInterval. Para isso precisamos atribuir o setInterval a uma variável.

````js
const contarAte10 = setInterval(callback, 1000);

let i = 0;
function callback() {
  console.log(i++);
  if (i > 10) {
    clearInterval(contarAte10);
  }
}

````
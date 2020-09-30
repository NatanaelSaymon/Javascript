// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var ganhouCopa = [1959, 1962, 1970, 1994, 2002]


// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
ganhouCopa.forEach(function (anoCopa) {
  console.log(`Brasil ganhou a copa de ${anoCopa}`)
})

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for (fruta of frutas) {
  console.log(fruta)
  if (fruta == "Pera") {
    console.log("O loop chegou na Pera")
    break
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas[frutas.length - 1]
console.log(ultimaFruta)
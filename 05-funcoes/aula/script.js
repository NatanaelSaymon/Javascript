function areaQuadrado(lado) {
  return lado * lado
}

console.log(areaQuadrado(10))

function imc(peso, altura) {
  const imc = peso / (altura * altura)
  return imc
}

console.log(`IMC: ${ imc(70, 1.75) }`)

function verificaCor(cor) {
  if (cor == "vermelho") {
    return "sua cor favorita é vermelho"
  } else if (cor == "preto") {
    return "sua cor favorita é preto"
  } else {
    return "você não tem cor favorita"
  }
}

console.log(verificaCor("preto"))

function precisoVisitar(paisesVisitados) {
  var totalPaises = 193
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`
}

console.log(precisoVisitar(99))
// console.log(totalPaises) <== erro, totalPaises não definidos
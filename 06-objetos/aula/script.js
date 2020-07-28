var pessoa = {
  nome: "Natanael",
  idade: 28,
  sexo: "Masculino",
  profissao: "Desenvolvedor"
}

console.log(pessoa.nome)

//Javascript antigo
var quadrado = {
  area: function (lado) {
    return lado * lado
  },
  perimetro: function (lado) {
    return lado * 4
  },
}

console.log(quadrado.area(4))
console.log(quadrado.perimetro(10))

//Javascript ES6+
var figuraGeometrica = {
  area(lado) {
    return lado * lado
  },
  perimetro(lado) {
    return lado * 4
  }
}

console.log(figuraGeometrica.area(8))
console.log(figuraGeometrica.perimetro(4))
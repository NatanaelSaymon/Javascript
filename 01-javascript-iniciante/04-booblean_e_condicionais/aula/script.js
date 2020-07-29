var idade = 28
var habilitacao = true

if (idade >= 18 && habilitacao == true) {
  console.log(`É maior de idade e tem habilitação`)
} else {
  console.log('Não é maior de idade e não tem habilidade')
}

// SWITCH

var corFavorita = 'Preto'

switch (corFavorita) {
  case 'Azul':
    console.log('Cor favorita Azul')
    break
  case 'Amarelo':
    console.log('Cor favorita Amarelo')
    break
  case 'Preto':
    console.log('Cor favorita Preto')
    break
  case 'Vermelho':
    console.log('Cor favorita Vermelho')
    break
  default:
    console.log('Não tem cor favorita')
}
// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [{
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let somaValoresTaxa = 0
let somaValoresRecebimento = 0

transacoes.forEach((item) => {
  if (item.descricao.includes('Taxa')) {
    let valor = item.valor.replace("R$", "")
    let nvalor = +valor
    somaValoresTaxa += nvalor
  }

  if (item.descricao.includes('Recebimento')) {
    let valor = item.valor.replace("R$", "")
    let nvalor = +valor
    somaValoresRecebimento += nvalor
  }


})

console.log(`Exercicio 1: A soma de todas as Taxas é: ${somaValoresTaxa}. `)
console.log(`Exercicio 1: A soma de todos os Recebimento é: ${somaValoresRecebimento}. `)


// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const arrayTransportes = transportes.split(';')
console.log(`Exercicio 2: ${arrayTransportes}`)

// Substitua todos os span's por a's
const html = `
  <ul>
    <li><span>Sobre</span></li>
    <li><span>Produtos</span></li>
    <li><span>Contato</span></li>
  </ul>
  `;

const htmlArray = html.split('span')
const htmlNovo = htmlArray.join('a')
console.log(`Exercicio 3: ${htmlNovo}`)
// html = html.replace(/[span]+/g, 'a')

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log('Exercicio 4: ', frase.charAt(frase.length - 1))

// Retorne o total de taxas
const transacoes02 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
let totalTaxas = 0

transacoes02.forEach((imposto) => {
  const totalImposto = imposto.trim().toLocaleLowerCase()
  if (totalImposto.includes('taxa') == true) {
    totalTaxas += 1
  }
})

console.log(`Exercicio 5: Total de taxas ${totalTaxas}`)
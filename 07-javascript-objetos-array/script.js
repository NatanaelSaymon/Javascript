//EXERCICIO 01
const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];

// Remova o primeiro valor de comidas e coloque em uma variável
const primeiroItem = comidas.shift()
console.log(primeiroItem)

// Remova o último valor de comidas e coloque em uma variável
const lastItem = comidas.pop()
console.log(lastItem)

// Adicione 'Arroz' ao final da array
comidas.push('Arroz')

// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift('Peixe', 'Batata')


//EXERCICIO 02
const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];

// Arrume os estudantes em ordem alfabética
estudantes.sort()

// Inverta a ordem dos estudantes
estudantes.reverse()

// Verifique se Joana faz parte dos estudantes
if (estudantes.includes('Joana')) {
  console.log('Sim, Joana faz parte da turma!')
} else {
  console.log('Não faz parte da turma!')
}

// Verifique se Juliana faz parte dos estudantes
if (estudantes.includes('Juliana')) {
  console.log('Sim, faz parte!')
} else {
  console.log('Juliana, não faz parte!')
}

//EXERCICIO 03
let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split('section').join('ul').split('div').join('li')

console.log(html)


//EXERCICIO 04
const carros = ['Ford', 'Fiat', 'VW', 'Honda'];

// Remova o último carro, mas antes de remover, salve a array original em outra variável
const novosCarros = carros.slice()

carros.pop()
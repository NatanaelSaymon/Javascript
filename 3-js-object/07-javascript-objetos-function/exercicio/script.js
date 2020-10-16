// Retorne a soma total de caracteres dos parágrafos acima utilizando reduce.
const nodeParagrafos = document.querySelectorAll('p')

const arrayParagrafos = Array.from(nodeParagrafos)

const totalCaractere = arrayParagrafos.reduce((acc, atual) => {
  return acc + atual.innerText.length
}, 0)

console.log(`Total de caracteres ${totalCaractere}`)


// Crie uma função que retorne novos elementos html, com os seguintes parâmetros tag, classe e conteudo.

function criaElemento(tag, classe, conteudo){
  const elemento = document.createElement(tag)
  classe ? elemento.classList.add(classe) : null
  conteudo ? elemento.innerHTML = conteudo : null
  return elemento
}

console.log(criaElemento('div', 'container', 'Javascript a melhor linguagem!'))

// Crie uma nova função utilizando a anterior como base essa nova função deverá sempre criar h1 com a classe titulo. Porém o parâmetro conteudo continuará dinâmico.

const h1 = criaElemento.bind(null, 'h1', 'title')

const cursoJs = h1('curso de javascript')
console.log(cursoJs)

const cursoCss = h1('curso de css')
console.log(cursoCss)






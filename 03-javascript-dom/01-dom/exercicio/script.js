// Retorne o url da página atual utilizando o objeto window
const page = window.location.href
console.log(page)

// Seleciona o primeiro elemento da página que possua a classe ativo
const ativo = document.querySelector('.ativo')
if (ativo.classList == "ativo") {
  ativo.style.color = "red"
}

// Retorne a linguagem do navegador
const linguagem = window.navigator.language
console.log(linguagem)

// Retorne a largura da janela 
larguraJanela = window.innerWidth
console.log(larguraJanela)
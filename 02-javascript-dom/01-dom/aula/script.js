const title = document.querySelector('.title')
title.innerText = "New Title"

const subtitle = document.querySelector('h2')
subtitle.innerText = "Sub-title"

const h3ativo = document.querySelector('h3')

if (h3ativo.classList == "ativo") {
  h3ativo.style.color = "red"
  console.log('Tem classe ativo em:', h3ativo.innerText)
} else {
  console.log('Não tem classe ativo')
}
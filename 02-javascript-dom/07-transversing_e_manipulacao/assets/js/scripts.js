//TRANSVERSING E MANIPULAÇÃO

const h1 = document.querySelector("h1");

// h1.innerText = "Novo titulo"
// console.log(h1.outerHTML)
// console.log(h1.innerHTML)

const lista = document.querySelector(".animais-lista");

// console.log(lista.parentElement) // pai
// console.log(lista.parentElement.parentElement) // pai do pai
// console.log(lista.previousElementSibling) // elemento acima
// console.log(lista.nextElementSibling) // elemento abaixo

// console.log(lista.children) //HTMLCollection com os filhos
// console.log(lista.children[0]) //primeiro filho
// console.log(lista.children[--lista.children.length]) //retorna o ultimo filho

const ul = lista.querySelectorAll("li"); // todas as LI's
const last_ul = lista.querySelector("li:last-child");

// ul.forEach((item) => {
//   console.log(item)
// })

// console.log('Ultimo filho: ', last_ul)

const contato = document.querySelector(".contato"); //pegando a todos os elementos que estão dentro de .contato

const titulo = document.querySelector(".title"); //Pegando o primeiro titulo da pagina

const tituloContato = contato.querySelector(".title"); //Estamos pegando o primeiro titulo da class "CONTATO"

const mapa = document.querySelector(".mapa");

const faq = document.querySelector(".faq");

// contato.appendChild(lista); //Move o elemento "lista" para o final de "contato"

// contato.insertBefore(lista, tituloContato); //Movendo a lista para antes do titulo de contato. Lembrando o segundo elemento passado dentro do metodo insertBefore() este elemento tem que está dentro do elemento Pai(contato)

// contato.removeChild(tituloContato); //Removendo o titulo de contato

// contato.replaceChild(lista, tituloContato); //Substitui o titulo de contato pela lista

// const newh1 = document.createElement("h1"); //Criando um novo elemento com o metodo createElement()

// newh1.innerText = "Novo titulo";
// newh1.classList.add("title");

// mapa.appendChild(newh1); //Adicionando o novo elemento na pagina

const cloneTitulo = titulo.cloneNode(true);

faq.appendChild(cloneTitulo);

// //CLASSLIST

// const menu = document.querySelector(".menu");
// console.log(menu.classList);

// //CONTAINS = true ou false
// if (menu.classList.contains("inativo")) {
//   console.log("Tem a class inativo no menu");
// } else {
//   console.log("Não tem class inativo no menu");
// }

// //ATTRIBUTE: retorna um array-like com os atributos do elemento
// const animais = document.querySelector(".animais");
// console.log(animais.attributes); //retorna todos os atributos
// console.log(animais.attributes[1]); //retorna o 2 atributos

// //GETATRIBUTE / SETATRIBUTE
// const animaisImagem = document.querySelectorAll("img");

// // animaisImagem.forEach((item) => {
// //   console.log(item.getAttribute("alt")); //retorna todos os atributos alts das imagens.
// // });

// animaisImagem.forEach((item) => {
//   if (item.hasAttribute("alt") == false) {
//     //Verifica se cada imagem contem o atributo alt, caso n tenha, vai ser adicionado o alt com um texto
//     item.setAttribute("alt", "Texto alternativo");
//   }
//   console.log(item.getAttribute("alt"));
// });
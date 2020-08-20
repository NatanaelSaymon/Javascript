// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll(".curso");

const arrayCursos = Array.from(cursos);

const objCursos = arrayCursos.map((curso) => {
  const title = curso.querySelector("h1").innerText;
  const desc = curso.querySelector("p").innerText;
  const aula = curso.querySelector("span.aulas").innerText;
  const horas = curso.querySelector("span.horas").innerText;
  return {
    titulo: title,
    descricao: desc,
    aula: aula,
    hora: horas,
  };
});

console.log(objCursos);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maiores = numeros.filter((numero) => {
  if (numero > 100) {
    return numero;
  }
});
console.log(maiores);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];

const findItem = instrumentos.some((item) => {
  if (item === "Baixo") {
    return true;
  } else {
    return false;
  }
});

console.log(findItem);

// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];

const valorTotal = compras.reduce((acomulador, item) => {
  let total = +item.preco.replace("R$", "").replace(",", ".");
  return acomulador + total;
}, 0);

console.log(valorTotal);

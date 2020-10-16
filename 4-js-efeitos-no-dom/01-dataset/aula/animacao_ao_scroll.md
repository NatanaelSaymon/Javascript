# ANIMAÇÃO AO SCROLL

Toda vez que uma section aparecer, iremos fazer com que ela apareça vindo da lateral.

## ADICIONANDO CLASSE EM CADA SESSÃO PARA FACILITAR A MANIPULAÇÃO

Nesse caso iremos adicionar a classe **js-scroll** em cada section.

```html
<section class="animais js-scroll"></section>
<section class="faq js-scroll"></section>
<section class="contato js-scroll"></section>
```

Agora vamos pegar esses elementos no javascript.

```js
const sections = document.querySelectorAll(".js-scroll");
```

Agora vamos inserir uma função que vai ativar o scroll

```js
function scrollAnimation() {
  /****/
}
```

Então toda vez que houver um evento de **scroll** precisamos ativar a função. Como podemos fazer isso? Bem simples:

```js
window.addEventListener("scroll", scrollAnimation);
```

Agora precisamos saber qual a distância que **cada elemento** tem do topo do site. Usaremos o forEach para pegar os valores de cada item. E para saber a distância, usaremos a propriedade **getBoundingClientRect().top**.

```js
function scrollAnimation() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
  });
}
```

A classe **active** vai ser ativa quando o tamanho da janela do usuario estiver com 60%. Para pegar o tamanho da janela, basta inserir: window.innerHeight. Agora basta multiplicar o valor por 0.6(60%).

```js
const windowMetade = window.innerHeight * 0.6;
```

Agora basta pegar a **sectionTop** - **windowMetade** se for menor que 0 então a section vai se tornar ativa.

```js
const sections = document.querySelectorAll(".js-scroll");
const windowMetade = window.innerHeight * 0.6;

function scrollAnimation() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionVisible = sectionTop - windowMetade < 0;
    if (sectionVisible) {
      section.classList.add("active");
    } else {
      section.classList.remove("active"); // remove a class active quando o usuario retorna para cima.
    }
  });
}

scrollAnimation(); //execute a função antes para que a primeira section fique ativa.
```

Criando a animação no CSS

```css
.js .js-scroll {
  opacity: 0;
  transform: translate3d(-30px, 0, 0);
  transition: 0.3s;
}

.js .js-scroll.active {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
```

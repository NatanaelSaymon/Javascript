# TIPO DE NAVEGAÇÃO: ACCORDION LIST

## ADICIONANDO CLASSE PARA FACILITAR A MANIPULAÇÃO

```html
<dl class="faq-lista js-accordion">
  <dt>Qual a idade dos animais?</dt>
  <dd>
    As raposas são animais mamíferos e onívoros pertencentes à família Canidae.
    São vulpídeos de porte médio, caracterizados por um focinho comprido e uma
    cauda longa e peluda.
  </dd>
</dl>
```

Queremos selecionar cada pergunta da lista, e apartir da pergunta, selecionaremos a resposta. Para fazer isso:

```js
const accordinList = document.querySelectorAll(".js-accordion dt");
console.log(accordionList); //Verifica se estamos selecionando todas as dt
```

Agora em cada item da lista, precisamos adicionar um evento. Esse evento será o evento de **click**.

```js
accordinList.forEach((item) => {
  item.addEventListener("click", activeAccordion);
});
```

Ao clicar em cada item da lista, vai ativar uma função (activeAccordion). Agora vamos inserir essa função:

```js
function activeAccordion() {
  console.log(this); //Usaremos o this, pois com o this mostra exatamente o que estamos clicando.
}
```

Agora ao clicar em cada dt, queremos ativar o proximo item. Para isso basta usar o **nextElementSibling**.

```js
function activeAccordion() {
  console.log(this.nextElementSibling); //Mostra no console o proximo elemento
}
```

Com isso feito, agora só precisamos inserir uma classe de ativo tanto no td como no dd.

```js
function activeAccordion() {
  this.classList.toggle("active");
  this.nextElementSibling.classList.toggle("active");
}
```

Agora precisamos estilizar no **CSS**.

```css
/* ACCORDION LIST */
.js-accordion dt::after {
  content: "⬎"; /*Para conseguir a setinha: http://xahlee.info/comp/unicode_arrows.html*/
  margin-left: 10px;
}
.js-accordion dt.active::after {
  content: "⬏";
}
.js .js-accordion dd {
  display: none;
  animation: slideDown 0.5s forwards;
}
.js-accordion dd.active {
  display: block;
}

/* Animações */
@keyframes slideDown {
  from {
    opacity: 0;
    max-height: 0; /*Não da para animar somente o height, por isso temos que por max-height*/
  }

  to {
    opacity: 1;
    max-height: 100px; /*sempre coloque uma altura quer seja maior que o conteudo. Cas contrario vai bugar.*/
  }
}
```

Agora vamos isolar todo esse codigo acima em uma função: **initAccordionList()**

```js
function initAccordionList() {
  const accordinList = document.querySelectorAll(".js-accordion dt");

  //verificar se existe o .js-accordion dt, caso não exista, vai da erro.
  if (accordinList.length) {
    accordinList[0].classList.add("active");
    accordinList[0].nextElementSibling.classList.add("active");

    function activeAccordion() {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("active");
    }

    accordinList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

initAccordionList(); //Inicia a função
```

**Perceba que estamos usando a classe 'active' varias vezes em nosso script. Então podemos inserir essa classe dentro de uma variavel. Isso facilita o trabalho e evita erros futuros.**

```js
function initAccordionList() {
  const accordinList = document.querySelectorAll(".js-accordion dt");
  const activeList = "active";

  if (accordinList.length) {
    //verificar se existe o .js-accordion dt, caso não exista, vai da erro.
    accordinList[0].classList.add(activeList);
    accordinList[0].nextElementSibling.classList.add(activeList);

    function activeAccordion() {
      this.classList.toggle(activeList);
      this.nextElementSibling.classList.toggle(activeList);
    }

    accordinList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

initAccordionList();
```

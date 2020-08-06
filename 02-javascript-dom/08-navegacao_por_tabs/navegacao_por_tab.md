# Navegação por Tab

## ADICIONAR CLASSES PARA MANIPULAÇÃO

A ideia de navegação por tabs, é ter uma lista de itens que controla a visualização de uma lista de conteúdo. Cada item da lista possui um conteúdo relacionado ao mesmo.

```html
<!-- 
  Primeiro, adicionar classes que irão facilitar a manipulação dos elementos do html no jvascript.
  Nesse caso iremos adicinar 2 novas classes js-tabmenu e js-tabcontent. Pois assim saberemos que 
  essas 2 classes pertecem ao javascript. animais-lista e animais-descricao seram as classes responsavel
  para inserir estilo no css.
-->
<ul class="animais-lista js-tabmenu">
  <!-- manipula as imagens -->
  ...
</ul>
<div class="animais-descricao js-tabcontent">
  <!-- manipula o conteudo -->
  ...
</div>
```

## SELECTIONAR ITENS

```js
const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent section");
```

## FUNÇÃO CALLBACK

Recebe index como parâmetro para ativar a tab. Sempre que ativar, remove a classe ativo de todos os outros elementos.

```js
function activeTab(index) {
  tabContent.forEach((content) => {
    content.classList.remove("ativo");
  });
  tabContent[index].classList.add("ativo");
}
```

## ADICIONAR O EVENTO

Neste caso precisamos passar antes, a função anônima no callback, para podermos passar o **index** como argumento de activeTab.

```js
tabMenu.forEach((itemMenu, index) => {
  itemMenu.addEventListener("click", () => {
    activeTab(index);
  });
});
```

**Obs: estamos ativando a função activeTab() passando o index para dentro da função. Nesse caso o tabMenu e o tabContent tem que ter o mesmo tamanho.**

## ANIMAÇÕES COM CSS

Animação simples com css, sai de display none para display block.

```CSS
.js .js-tabcontent section {
  display: none;
}

.js-tabcontent section.ativo {
  display: block !important;
  animation: show .5s forwards;
}

@keyframes show {
  from {
    opacity: 0;
    transform: translate3d(-30px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0px, 0, 0);
  }
}

```

## ARRUMANDO ALGUNS POSSIVEIS ERROS

1º Quando o usuario entrar no site, temos que deixar carregado o conteudo da primeira Imagem

```js
tabContent[0].classList.add("active");
```

2º Quando o usuario estiver em alguma outra pagina do site, o javascript vai executar e vai procurar os elementos. Caso ele não encontre, vai ficar gerando erros no consoles, para que isso não aconteça, vamos inserir uma condição:

```js
// Verificar se existe elemento em tabContent e tabMenu
if(tabContent.length && tabMenu.length) {
  tabContent[0].classList.add('ativo');
  ...
}
```

3º Caso o usuario esteja com o javascript desabilitado as sections não vão aparecer, como podemos resolver?

Vamos criar um script no head do html, e adicionaremos a class "js" no html. Usaremos o className para fazer isso, pois com o className podemos atribuir valores, e o classList já um recurso mais avançado.

```html
<script>
  document.documentElement.className += " js";
</script>
```

Agora mesmo que o usuario esteja com o javascript desabilitado a section não vai sumir, pois para que todas as sections sumam o javascript tem que esta habilitado.

```css
.js .js-tabcontent section {
  display: none;
}
```

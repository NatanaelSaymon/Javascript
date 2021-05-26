# Javascript Assincrono

### Sincrono VS Assincrono

<br>

**Sincrono**: Espera a tarefa acabar para continuar com a proxima.

**Assincrono**: Move para a proxima tarefa antes da anterior terminar. O trabalho sera executado no 'fundo' e quando terminado, sera colocado na fila (task queue).

<br>

### Vantagens


<br>

**Carregamento no fundo**: Nao travao script. E possivel utilizar o site enquanto o processamento eh realizado no fundo.

<br>

**Funcao ao termino**: Podemos ficar de olho no carregamento e executar uma funcao assim que ele terminar.

<br>

**Requisicoes ao Servidor**: Nao precisamos recarregar a pagina por completo a cada requisicao feita ao servidor.

<br><br>

## NEW PROMISES()

Promise é uma função construtora de promessas. Existem dois resultados possíveis de uma promessa, ela pode ser resolvida, com a execução do primeiro argumento, ou rejeitada se o segundo argumento for ativado.

````js
const promessa = new Promise(function(resolve, reject) {
  let condicao = true;
  if(condicao) {
    resolve();
  } else {
    reject();
  }
});

console.log(promessa); // Promise {<resolved>: undefined}

````


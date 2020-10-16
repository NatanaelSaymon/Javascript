

## NEW DATE()

O construtor Date cria um objeto contendo valores como mês, dia, ano, horário e mais. A data é baseada no relógio interno do computador.

````js
const agora = new Date();
agora;

// Semana Mês Dia Ano HH:MM:SS GMT
agora.getDate() // Dia
agora.getDay() // Dia da Semana ex: 5 = Fri
agora.getMonth() // Número dia mês
agora.getFullYear() // Ano
agora.getHours() // Hora
agora.getMinutes() // Minutos
agora.getTime() // ms desde 1970
agora.getUTCHours() - 3 // Brasília
````
<br><br>



## GETTIME()

O método getTime() mostra o tempo total em milessegundos desde o dia 1 de janeiro de 1970.

````JS
const agora = new Date();
agora.getTime(); //

// total de dias desde 1 de janeiro de 1970
const diasPassados = agora.getTime() / (24 * 60 * 60 * 1000);
````
<br><br>



## DIAS ATE

Podemos criar um objeto com uma data no futuro, passando uma string com o valor da data.

````JS
const agora = new Date()
    const natal = new Date('Dec 31 2020 23:59')

    //transformando milisegundos em dias
    function transformarDias(tempo){
        return tempo / (24 * 60 * 60 * 1000)
    }

    const diasAgora = transformarDias(agora.getTime())
    const diasNatal = transformarDias(natal.getTime())
    const diasRestante = Math.floor(diasNatal - diasAgora)

    console.log(diasRestante)
````
<br><br>



## INSERINDO HORA DE ABERTURA NO SITE

Na parte de onde fica as informacoes da empresa, vamos inserir mais uma `<li>`, essa li vai conter as informacoes como data e hora. Para isso criaremos 2 atributos **data: data-semana e data-horario**.

**data-semana="1,2,3,4,5"**: os numeros significam os dias da semana, sendo que 0 eh domingo. Logo 1 = segunda, 2 = terca, 3 = quarta, 4 = quinta, 5 = sexta.

**data-horaio="8,18"**: os numero significam o tempo em que a loja ficara aberta, das 8 as 18h.

````html
<ul class="dados">
    <li>contato@gmail.com</li>
    <li>+55 11 99999-9999</li>
    <li>Rua Marte, 1320</li>
    <li>São Paulo, SP</li>
    <li data-semana="1,2,3,4,5" data-horario="8,18">
        Seg a Sex das 8 as 18
    </li>
</ul>
````
<br><br>

Agora vamos pegar esses horarios no javascript.

````js
//selecionando o atributo que contem os dias da semana
const funcionamento = document.querySelector("[data-semana]")

//selecionando o atributo que contem o horario de abertura e fechamento
const horarioSemana = document.querySelector("[data-horario]")
````

<br><br>

Precisamos pegar os dias da semana que estao dentro da **const funcionamento** e precisamos pegar tbm os horarios que estao dentro da **const horarioSemana**. 

Bem simples:

````js
//pegando os valores que estao dentro de funcionamento
const diaSemana = funcionamento.dataset.semana

//pegando os valores que estao dentro de horarioSemana
const horario = horarioSemana.dataset.horario 
````

Porem se formos verificar qual o retorno das variaves **diaSemana e horario** no console.log, veremos que esse retorno vai ser (uma string com varias virgulas) e para comparar os valores iremos precisar de um array. Entao basta transforma as const em array. E como podemos fazer isso? 

<br> 

Usaremos o **split()** para transformar a string em array e usaremos tbm o map(number) para transforma os valores do array em numeros.
 
````js
const funcionamento = document.querySelector("[data-semana]")
const diaSemana = funcionamento.dataset.semana.split(",").map(Number) 

const horarioSemana = document.querySelector("[data-horario]")
const horario = horarioSemana.dataset.horario.split(",").map(Number)
````
<br><br>

Agora iremos pegar a data e o horario.

````js
const dataAgora = new Date()
const diaAgora = dataAgora.getDay() //Pegando o dia do sistema
const horarioAgora = dataAgora.getHours() //Pegando o horario do sistema
````

Agora iremos comparar o dia da semana e a hora para que possamos adicionar o uma classe chamada "aberto" no site.

Primeiro vamos verificar se esta aberto na semana:

````js
const diaAberto = diaSemana.indexOf(diaAgora) !== -1
````

O codigo acima retorna true ou false. Se retornar true, significa que esta aberto, se retornar false, significa que esta fechado.

<br>

Agora iremos comprar o horario, eh bem simples temos 2 horarios, hario de inicio e horario final.

Podemos verificar se o horarioAtual eh maior que o horario de inicio ou se ele eh menor que o horario.

````js
const horarioAberto = (horarioAgora >= horario[0] && horarioAgora < horario[1])
````

LEMBRANDO QUE **const horario** SOH TEM 2 VAROLES [8, 18], ENTAO COMO PODEMOS COMPARAR? BEM SIMPLES PARA ACESSAR O PRIMEIRO VALOR BATA POR 0 E PARA ACESSAR O ULTIMO VALOR BASTA COLOCAR 1.

````js

Agora que temos todas essas comparacoes, basta iremos a classe "aberto"

if(diaAberto && horarioAberto){
    funcionamento.classList.add('aberto')
}
````

<br><br>

````css
/* Horario de funcionamento */
[data-semana]::after {
  display: inline-block;
  content: "";
  width: 8px;
  height: 8px;
  background: #e54; /*cor vermelha*/
  border-radius: 50%;
  margin-left: 4px;
  border: 2px solid #000;
}

[data-semana].aberto::after {
  background: #3f4; /*cor verde*/
}
````




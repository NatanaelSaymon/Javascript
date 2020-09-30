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

Na parte de onde fica as informacoes da empresa, vamos inserir mais uma <li>, essa li vai conter as informacoes como data e hora. Para isso criaremos 2 atributos **data: data-semana e data-horario**.

**data-semana="1,2,3,4,5"**: os numeros significam os dias da semana, sendo que 0 eh domingo.

**data-horaio="8,18"**: os numero significam que eh o tempo em que a loja ficara aberta, das 8 as 18h.

````html
<ul class="dados">
    <li>contato@gmail.com</li>
    <li>+55 11 99999-9999</li>
    <li>Rua Marte, 1320</li>
    <li>São Paulo, SP</li>
    <li data-semana="1,2,3,4,5" data-horario="8,18">Seg a Sex das 8 as 18</li>
</ul>
````



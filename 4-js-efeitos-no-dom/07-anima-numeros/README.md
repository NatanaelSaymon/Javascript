## Animando Numeros 

Criando uma section e animando numeros.

## HTML
````html
<section class="grid-section numeros" data-anima="scroll">
    <h1 class="title">Números</h1>
    <div class="numeros-grid">
        <div class="numero-animal">
        <h3>Leao</h3>
        <span data-numero>3000</span>
        </div>

        <div class="numero-animal">
        <h3>Lobos</h3>
        <span data-numero>4610</span>
        </div>

        <div class="numero-animal">
        <h3>Raposas</h3>
        <span data-numero>8470</span>
        </div>

        <div class="numero-animal">
        <h3>Ursos</h3>
        <span data-numero>230</span>
        </div>
    </div>
</section>
````



## CSS
````css
.numeros-grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column: 2 / 4;
    gap: 30px;
}

.numeros-grid h3{
    font-family: monospace;
    font-size: 2rem;
    margin-bottom: .5rem;
}

.numeros-grid span{
    font-family: Helvetica, Arial;
    font-weight: bold;
    font-size: 1.5rem;
    color: #e54;
}
````



## JS
````js
function animaNumeros(){
    const numeros = document.querySelectorAll("[data-numero]") /*Pegando os valores de cada numero atraves do [data-numero]*/

    numeros.forEach((numero) => { /*Usando o forEach para extrair os valores de cada numero*/
        const total = +numero.innerText /*Pegando os valores e transformando em numeros com "+"*/
        
        const incremento = Math.floor(total / 100) /*Para que o numero possa carregar mais rapido e usando o floor, o numero vai vir inteiro*/
        
        let start = 0 /*inicia a contagem*/

        const time = setInterval(() => { /*criando o intervalo*/
            start = start + incremento
            numero.innerText = start /*mudando o numero*/
            if(start > total){
                numero.innerText = total /*Para que a contagem pare no valor total do numero, pois a contagem esta ultrapassano o valor original*/
                clearInterval(time)
            }
        }, 25 * Math.random())
        console.log(total)
    })
}


/* OBSERVADOR */

function handleMutation(mutation){
    if(mutation[0].target.classList.contains('active')){
        observer.disconnect() //Para de observar
        animaNumeros()
    }
}

const observerTarget = document.querySelector('.numeros')

const observer = new MutationObserver(handleMutation)

observer.observe(observerTarget, {attributes: true})
````
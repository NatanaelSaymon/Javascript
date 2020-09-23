// Mude a cor da tela para azul e depois para vermelho a cada 2s.

function mudarClasse(){
    document.body.classList.toggle('active')
}

//setInterval(mudarClasse, 2000)


// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const iniciar = document.querySelector(".iniciar")
const pausar = document.querySelector(".pausar")
const tempo = document.querySelector(".tempo")

iniciar.addEventListener("click", iniciarTempo)
pausar.addEventListener("click", pausarTempo)
pausar.addEventListener("dblclick", resetarTempo)

let c = 0 //c = contagem
let timer //recebe o setInterval

function iniciarTempo(){
    timer = setInterval(() => {
        tempo.innerHTML = c++
    }, 100)

    iniciar.setAttribute('disabled', '')//disabled: desabilita o botao
}

function pausarTempo(){
    clearInterval(timer)
    iniciar.removeAttribute('disabled')//remove o disabled
}

function resetarTempo(){
    tempo.innerHTML = 0
    c = 0
}
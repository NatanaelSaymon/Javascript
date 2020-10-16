export default function initFuncionamento(){
    const funcionamento = document.querySelector("[data-semana]")
    const horarioSemana = document.querySelector("[data-horario]")

    //pegando os valores que estao dentro de semana, transformando diaSemana em um array com numeros.
    const diaSemana = funcionamento.dataset.semana.split(",").map(Number) 
    
    //pegando os valores que estao dentro de horario, transformando diaSemana em um array com numeros.
    const horario = horarioSemana.dataset.horario.split(",").map(Number)
    

    const dataAgora = new Date()
    const diaAgora = dataAgora.getDay()
    const horarioAgora = dataAgora.getHours()

    const diaAberto = diaSemana.indexOf(diaAgora) !== -1
    const horarioAberto = (horarioAgora >= horario[0] && horarioAgora < horario[1])

    if(diaAberto && horarioAberto){
        funcionamento.classList.add('aberto')
    }
}
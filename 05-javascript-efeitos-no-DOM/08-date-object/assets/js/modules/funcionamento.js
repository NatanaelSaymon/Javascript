export default function initFuncionamento(){
    const funcionamento = document.querySelector("[data-semana]")
    const diaSemana = funcionamento.dataset.semana //pegando os valores que estao dentro de semana
    const arrayDiaSemana = diaSemana.split(",").map(Number) //transformando diaSemana em um array

    const horarioSemana = document.querySelector("[data-horario]")
    const horario = horarioSemana.dataset.horario
    const arrayHorario = horario.split(",").map(Number)

    const dataAgora = new Date()
    const diaAgora = dataAgora.getDay()
    const horarioAgora = dataAgora.getHours()

    const diaAberto = arrayDiaSemana.indexOf(diaAgora) !== -1
    const horarioAberto = (horarioAgora >= arrayHorario[0] && horarioAgora < arrayHorario[1])

    if(diaAberto && horarioAberto){
        funcionamento.classList.add('aberto')
    }
}
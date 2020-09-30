export default function initFuncionamento(){
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
}
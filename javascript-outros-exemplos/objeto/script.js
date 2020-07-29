let carro = {
    nome: 'Skyline',
    modelo: 'Nissan',
    ano: '2002',
    valor: '100.00',
    ligar : false,
    LigarCarro: function(){
        carro.ligar = true
        document.write(this.modelo + " " + this.nome + " ligado!<br>")
    },
    AcelerarCarro: function(){
        if(carro.ligar == true){
            document.write("Aceleração ativada!<br>")
        }else{
            document.write(this.modelo + " " + this.nome + " está desligado! Execute a função <b>LigarCarro()</b> para acelerar.")
        }
    }
}
// document.write("Modelo: " + carro.modelo + "<br>");
// document.write("Nome: " + carro.nome + "<br>");
// document.write("Ano: " + carro.ano + "<br>");
// document.write("Valor: " + carro.valor + "<br>");

// carro.LigarCarro();
// carro.AcelerarCarro();

let carros =[
    {nome: 'Toyota', modelo: 'Corolla'},
    {nome: 'Volkswagen', modelo: 'Golf'},
    {nome: 'Ford', modelo: 'Fusion'},
    {nome: 'Nissan', modelo: 'Skyline'},
    {nome: 'Honda', modelo: 'Civic'},
]

document.write(carros[1].nome+ " " + carros[1].modelo)
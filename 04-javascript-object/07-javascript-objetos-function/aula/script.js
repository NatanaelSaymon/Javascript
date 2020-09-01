//FUNCTION CALL()
//executa a função, sendo possivel passarmos uma nova referencia ao this da mesma

const carro1 = {
  marca: 'Fiat',
  ano: '2008'
}

function descricaoCarro(){
  console.log(`Carro: ${this.marca}, ano ${this.ano}.`)
}

//descricaoCarro() // undefined undefined
//descricaoCarro.call() // undefined undefined
descricaoCarro.call(carro1)



//FUNCTION APPLY()
//funciona como o call(), a única diferença é que os argumentos da função são passados através de um array

// Podemos passar null para o valor
// de this, caso a função não utilize
// o objeto principal para funcionar

const numeros = [10, 45, 5, 56, 400]
console.log(Math.max.apply(null, numeros))



//FUNCTION BIND()
//diferente de call e apply, bind(this, arg1, arg2, ...) não irá executar a função mas sim retornar a mesma com o novo contexto de this.

const carro2 = {
  marca: 'Ford',
  nome: 'Fusion',
  acelerar: function(aceleracao, tempo){
    return `${this.marca} ${this.nome} acelerou ${aceleracao}km em ${tempo} segundos!!`
  }
}

console.log(carro2.acelerar(300, 10))

const carro3 = {
  marca: 'Honda',
  nome: 'Civic',
}

const acelerarCarro3 = carro2.acelerar.bind(carro3)
console.log(acelerarCarro3(100, 10))
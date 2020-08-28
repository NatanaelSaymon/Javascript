//OBJECT
//Todo objeto é criado com o construtor Object e por isso herda as propriedades e metodos de seu prototype

const pessoa = {
  idade: 28,
  init(nome){
    this.nome = nome;
    return this;
  },
  acao(acao){
    return `${this.nome} está ${acao}`
  }
}

const mulher = Object.create(pessoa)
console.log(mulher.init('Suellen').acao('caminhando'))

const homem = Object.create(pessoa)
console.log(homem.init('Natanael').acao('correndo'))



//OBJECT DEFINEPROPERTIES()
//Object.defineProperties(alvo, propriedades) adiciona ao alvo novas propriedades. A diferença aqui é a possibilidade de serem definidas as características dessas propriedades.

const moto = {}
Object.defineProperties(moto, {
  rodas: {
    value: 2,
    configurable: false, //impede ou não de deletar tal propriedade
    writable: false, //impede ou não a mudança de valor
  },
  capacete: {
    value: 1
  }
})

moto.rodas = 3
console.log(moto)



//GET E SET
//É possivel definirmos diferentes comportamentos para GET e SET de uma propriedade. LEMBRANDO que ao acionarmos uma propriedade obj.propriedade, a função get é ativada e ao setarmos obj.propriedade = 'valor' a função de SET é ativada.

const carro = {}
Object.defineProperties(carro, {
  velocidade:{
    get(){
      return this._velocidade
    },
    set(km){
      this._velocidade = 'velocidade ' + km
    }
  }
})

carro.velocidade = 200
console.log(carro.velocidade)

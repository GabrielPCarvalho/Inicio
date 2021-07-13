class Pessoa{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
}

const pessoa1 = new Pessoa('Carlos', 30)
pessoa1.idade = 21
console.log(pessoa1)

const pessoa2 = new Pessoa('Kelly', 25)
console.log(pessoa2)
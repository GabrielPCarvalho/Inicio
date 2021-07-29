// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa) // freeze = congelar o objeto
//Após ser congelado ele não pode ser alterado 

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)

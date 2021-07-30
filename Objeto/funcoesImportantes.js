const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // NOME , IDADE e PESO
console.log(Object.values(pessoa)) // VALORES
console.log(Object.entries(pessoa)) // OS DOIS JUNTOS

Object.entries(pessoa).forEach(([chave, valor])=> {
    console.log(`${[chave]}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3,a: 4}
const obj = Object.assign(dest, 01, 02)

Object.freeze(obj)
obj.c = 1234
console.log(obj)
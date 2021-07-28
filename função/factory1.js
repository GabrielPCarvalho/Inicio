//const prod1 = {
//    nome: '...'
//    preco: 45
//}

//const prod2 = {
//  nome: '...'
//  preco: 455
//}

// Para resolver esse problema de ficar cadastrando um monte de prod
// usaremos o factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())
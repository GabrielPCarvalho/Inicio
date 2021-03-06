Array.prototype.reduce2 = function(callback, valorIcinial) {
    const indiceInicial = valorIcinial ? 0 : 1
    let acumulador = this[0]
    for (let i = indiceInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const some = (total, valor) => total = valor
const nums  = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma, 21))
function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)


// simulado o new
function novo(f, ...prams) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, prams)
    return obj
}


const aula3 = new Aula('Bem Vindo', 123)
const aula4 = new Aula('Até Breve', 123)
console.log(aula3, aula4)
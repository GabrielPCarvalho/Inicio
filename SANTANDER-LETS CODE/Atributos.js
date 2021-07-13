class Quadrado{
    constructor(base, altura){
        if(isNaN(base)|| isNaN(altura)) throw "informação não númerica"
        this.base = base
        this.altura = altura
        this.cor = undefined
    }
}

const quadrado = new Quadrado(50,15)
quadrado.cor = 'orange'
console.log(quadrado)
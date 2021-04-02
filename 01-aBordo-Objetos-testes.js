// Use Getters e Setters

let contador = {
    numero: 0,
    get atual() {
        this.numero
    },
    set atual(posicao) {
        this.numero = posicao
    },
    mais() {
        ++this.numero
    },
    menos() {
        --this.numero
    }
}

contador.mais()
console.log(contador.numero)

contador.mais()
console.log(contador.numero)

contador.atual = 0
console.log(contador.numero)
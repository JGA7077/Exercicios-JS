let usuario = {
    nome: 'Ayrton',
    idade: 26,
    youtube: 'Programador a Bordo'
}

console.log(usuario)
console.log(usuario.nome)
console.log(usuario.idade)
console.log(usuario.youtube)

usuario.ano = 2019

console.log(usuario)
console.log(usuario.ano)

delete usuario.idade

console.log(usuario)

usuario.hobbies = ['Música', 'Programar', 'Viajar']

console.log(usuario)

usuario.competencias = {
    linguagens: ['Javascript', 'Python', 'Go', 'Scala', 'PHP'],
    instrumentoMusicais: ['Guitarra', 'Baixo', 'Bateria']
}

console.log(usuario)


let usuario2 = {
    // Forma Completa de usar uma Função no Objeto
    digaOi: function(name) {
        return `Olá, ${name}`
    },
    // Forma mais compacta de usar uma Função no Objeto
    digaOi2(name) {
        return `Olá, ${name}`
    }
}

console.log(usuario2.digaOi('Ayrton'))
console.log(usuario2.digaOi2('Teshima'))

let cor = 'azul'

let usuario3 = {
    nome: 'Ayrton',
    cor
}

console.log(usuario3)

let usuario4 = {
    nome: 'Ayrton',
    idade: 26
}

let extraInfo = {
    pais: 'Brasil',
    estado: 'Rio de Janeiro'
}

let novoUsuario = Object.assign({}, usuario4, extraInfo)
console.log(novoUsuario)

Object.assign(usuario4, extraInfo)
console.log(usuario4)

let novoUsuario2 = {
    ...usuario4,
    ...extraInfo
}

console.log(novoUsuario2)

let nomeVariavel = 'Estado'
let usuario5 = {
    nome: 'Ayrton',
    [nomeVariavel]: 'Rio de Janeiro'
}

console.log(usuario5)

let usuarios = [
    {
        nome: 'Ayrton',
        idade: 26
    },
    {
        nome: 'João',
        idade: 19
    },
    {
        nome: 'Maria',
        idade: 21
    }
]

console.log(usuarios[2].idade)

let usuario6 = {
    posicao: 0,
    get atual() {
        return usuarios[this.posicao]
    },
    set atual(posicao) {
        this.posicao = posicao
    },
    proximo() {
        ++this.posicao
    },
    anterior() {
        --this.posicao
    }
}

console.log(usuario6.atual)
usuario6.proximo()

console.log(usuario6.atual)

usuario6.proximo()
console.log(usuario6.atual)

usuario6.anterior()
console.log(usuario6.atual)

usuario6.atual = 0
console.log(usuario6.atual)

usuario6.atual = 2
console.log(usuario6.atual)

let num = 1
console.log(Number.isInteger(num))

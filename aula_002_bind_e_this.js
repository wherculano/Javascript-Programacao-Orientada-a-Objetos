const user = {
    nome: "Wagner",
    email: "wag@herculano.com",
    nascimento: "2023/03/15",
    role: "admin",
    ativo: true,
    exibirInfos: function() {
        // this se refere a este contexto, neste caso a user
        console.log(`Nome: ${this.nome}, E-mail: ${this.email}`)
    }
}

user.exibirInfos()

// Explicação de contexto do this
const exibir = function(){
    console.log(this.nome)
}

const exibirNome = exibir.bind(user) // dando 'contexto'

exibirNome()
exibir()
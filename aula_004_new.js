function User(nome, email){
    this.nome = nome
    this.email = email

    this.exibeInformacoes = function(){
        return `Olá! Meu nome é ${this.nome} e meu e-mail é ${this.email}`
    }
}

// Utilizando construtor
const user = new User("Wagner", "wag@ner.com")
console.log(user.exibeInformacoes())

// Exemplo utilizando object.create(), porem não é boa pratica, pois mexe com prototype e isso é "perigoso"
function Admin(role, nome, email){
    User.call(this, nome, email)
    this.role = role || "estudante"
}

Admin.prototype = Object.create(User.prototype)
const admin = new Admin("admin", "Joao", "ze@zinho.com")
console.log(admin.exibeInformacoes())
console.log(admin.role)

// Mais um exemplo utilizando objetct.create(), melhor opção.
const newUser = {
    init: function(nome, email){  // construtor
        this.nome = nome
        this.email = email
    }, 
    exibirInfos: function(nome){
        return this.nome
    }
}

const novoUser = Object.create(newUser)
novoUser.init("Wagner", "wag@ner.com")
console.log(novoUser.exibirInfos("Herculano"))
console.log(newUser.isPrototypeOf(novoUser))

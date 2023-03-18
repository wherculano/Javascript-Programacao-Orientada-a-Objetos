export default class User {
  #nome  // forma atual de declarar um atributo privado (antes era usando _, como por exemplo, _nome)
  #email
  #nascimento
  #role
  #ativo
  constructor(nome, email, nascimento, role, ativo = true) {
    this.#nome = nome;
    this.#email = email;
    this.#nascimento = nascimento;
    this.#role = role || "estudante"; // valor recebido OU estudante
    this.#ativo = ativo;
  }

  #montarObjUser(){
    return ({
      nome: this.#nome,
      email: this.#email,
      nascimento: this.#nascimento,
      role: this.#role,
      ativo: this.#ativo
    })
  }

  exibirInfos() {
    const objUser = this.#montarObjUser()
    return `${objUser.nome}, ${objUser.email}, ${objUser.nascimento}, ${objUser.role}, ${objUser.ativo}`;
  }
}

// const wagner = new User("Wagner", "wag@ner.com", "1988-12-25", "Dev Python");
// console.log(wagner)
// console.log(wagner.exibirInfos());

// console.log(User.prototype.isPrototypeOf(wagner))

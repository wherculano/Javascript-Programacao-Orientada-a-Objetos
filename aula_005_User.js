class User {
  constructor(nome, email, nascimento, role, ativo = true) {
    this.nome = nome;
    this.email = email;
    this.nascimento = nascimento;
    this.role = role || "estudante"; // valor recebido OU estudante
    this.ativo = ativo;
  }

  exibirInfos() {
    return `${this.nome}, ${this.email}`;
  }
}

const wagner = new User("Wagner", "wag@ner.com", "1988-12-25", "Dev Python");
console.log(wagner)
console.log(wagner.exibirInfos());

console.log(User.prototype.isPrototypeOf(wagner))

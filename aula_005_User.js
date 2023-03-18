export default class User {
  #nome; // forma atual de declarar um atributo privado (antes era usando _, como por exemplo, _nome)
  #sobrenome;
  #email;
  #nascimento;
  #role;
  #ativo;
  constructor(nome, sobrenome, email, nascimento, role, ativo = true) {
    this.#nome = nome;
    this.#sobrenome = sobrenome;
    this.#email = email;
    this.#nascimento = nascimento;
    this.#role = role || "estudante"; // valor recebido OU estudante
    this.#ativo = ativo;
  }

  get nome() {
    return `${this.#nome} ${this.#sobrenome}`;
  }

  set nome(novoNome) {
    if (novoNome === "") {
      throw new Error("Nome não pode estar em branco");
    }
    let [nome, ...sobrenome] = novoNome.split(" ");
    sobrenome = sobrenome.join(" ");
    this.#nome = nome;
    this.#sobrenome = sobrenome;
  }

  get sobrenome() {
    return this.#sobrenome;
  }

  get email() {
    return this.#email;
  }

  get nascimento() {
    return this.#nascimento;
  }

  get role() {
    return this.#role;
  }

  get ativo() {
    return this.#ativo;
  }

  exibirInfos() {
    return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`;
  }
}

// const wagner = new User("Wagner", "wag@ner.com", "1988-12-25", "Dev Python");
// console.log(wagner)
// console.log(wagner.exibirInfos());

// console.log(User.prototype.isPrototypeOf(wagner))

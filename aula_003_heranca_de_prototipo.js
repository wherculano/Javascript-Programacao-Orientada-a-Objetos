const user = {
  nome: "Wagner",
  email: "wag@herculano.com",
  nascimento: "2023/03/15",
  role: "admin",
  ativo: true,
  exibirInfos: function () {
    console.log(`Nome: ${this.nome}, E-mail: ${this.email}`);
  },
};

const admin = {
  nome: "Herculano",
  email: "h@h.com.br",
  criarCurso() {
    console.log("curso criado!");
  },
};

Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();  // para o this, o contexto será de admin e nao de user.

// estes exemplos serão melhores entendidos se testados no console do navegador (apesar de rodar normal no Node)
console.log(admin.__proto__) // acessando o prototipo de admin, ou seja, user
console.log(admin.__proto__.__proto__) // acessando o prototipo do prototipo de admin, ou seja, Object (fim da cadeia)

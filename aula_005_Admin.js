import User from "./aula_005_User.js";

export default class Admin extends User {
  constructor(
    nome,
    sobrenome,
    email,
    nascimento,
    role = "admin",
    ativo = true
  ) {
    super(nome, sobrenome, email, nascimento, role, ativo);
  }

  exibirInfos(){
    return `${this.nome}, ${this.role}, ${this.ativo}`
  }
  criarCurso(nomeDoCurso, numVagas) {
    return `Curso de ${nomeDoCurso} criado com ${numVagas} vagas.`;
  }
}

// const admin = new Admin("Wagner", "wag@ner.com", "2002-12-25")
// console.log(admin)
// console.log(admin.exibirInfos())
// console.log(admin.criarCurso("JS", 19))

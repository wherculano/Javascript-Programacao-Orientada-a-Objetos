import User from "./aula_005_User.js";

export default class Docente extends User {
  constructor(nome, email, nascimento, role = "docente", ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }

  aprovaEstudante(estudante, curso) {
    return `Estudante ${estudante} passou no curso de ${curso}.`;
  }
}

// const docente = new Docente("Matheus", "math@eus.com", "2020-12-25")
// console.log(docente)
// console.log(docente.exibirInfos())
// console.log(docente.aprovaEstudante("Wagner", "Javascript"))

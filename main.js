import User from "./aula_005_User.js";
import Docente from "./aula_005_Docente.js";
import Admin from "./aula_005_Admin.js";


const user = new User("Matheus", "math@eus.com", "2020-01-01")
console.log(user.exibirInfos())

// user.nome = "Wagner" // Ok, pois está sendo criado um novo atributo apenas para esta instancia
// user.#nome = "Wagner" // Não pode, pois está tentando alterar um atributo privado
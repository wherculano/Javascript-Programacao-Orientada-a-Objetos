import User from "./aula_005_User.js";
import Docente from "./aula_005_Docente.js";
import Admin from "./aula_005_Admin.js";

const user = new User("Matheus", "Herculano", "math@eus.com", "2020-01-01");
console.log(user.exibirInfos());
console.log(user.nome);

console.log("-=".repeat(20));

const admin = new Admin("Wagner", "Herculano", "w@w.com", "2023-01-01");
console.log(admin.exibirInfos());
console.log(`\nNome admin: ${admin.nome}`);
console.log(`Sobrenome admin: ${admin.sobrenome}`);

admin.nome = "João José Emiliano";
console.log(`\nNome admin: ${admin.nome}`);
console.log(`Sobrenome admin: ${admin.sobrenome}`);

console.log("-=".repeat(20));

const docente = new Docente("Dani", "Goncalves", "d@d.com", "2022-01-01")
console.log(docente.exibirInfos())
docente.nome = "Dani Herculano"
console.log(docente.nome)
console.log(docente.sobrenome)

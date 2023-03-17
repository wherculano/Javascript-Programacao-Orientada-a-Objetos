// Um exemplo de uso de call() para especificar o contexto de this:
function exibeInfos() {
  console.log(this.nome, this.email);
}

const user = {
  nome: "Mariana",
  email: "m@m.com",
};

exibeInfos.call(user);

// Também é possível fazer com que a função seja executada em determinado contexto, mesmo após ser instanciada:
function User(nome, email) {
  this.nome = nome;
  this.email = email;

  this.exibeInfos = function () {
    console.log(this.nome, this.email);
  };
}

const mariana = new User("mariana", "m@m.com");

const rodrigo = {
  nome: "Rodrigo",
  email: "r@r.com",
};

mariana.exibeInfos(); //mariana m@m.com
mariana.exibeInfos.call(rodrigo); //Rodrigo r@r.com

// Também é possível passar parâmetros para call(), como no exemplo a seguir.
function exibeMensagem(nome, email) {
  console.log(`usuário: ${nome}, email ${email}`);
}
const josefa = {
  nome: "Josefa",
  email: "jo@jo.com",
  executaFuncao: function (fn) {
    fn.call(user, this.nome, this.email);
  },
};

josefa.executaFuncao(exibeMensagem); //usuário: Josefa, email jo@jo.com

// O método apply() funciona de forma semelhante ao call(), porém recebe a lista de argumentos em um array:
function exibeMensagem(nome, email) {
  console.log(`usuário: ${nome}, email ${email}`);
}
const joao = {
  nome: "João",
  email: "j@j.com",
  executaFuncao: function (fn) {
    fn.apply(user, [this.nome, this.email]);
  },
};
joao.executaFuncao(exibeMensagem); //usuário: João, email j@j.com

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  getNome() {
    return this.nome;
  }

  getIdade() {
    return this.idade;
  }

  getInfo() {
    console.log(this.nome + ", idade: " + this.idade);
  }
}

let pessoas = [];

const btn_add = document.querySelector("#btn_add");
const res = document.querySelector("#res");

const addPessoas = () => {
  res.innerHTML = "";
  pessoas.map((p) => {
    const div = document.createElement("div");
    div.setAttribute("class", "pessoa");
    div.innerHTML = `Nome: ${p.getNome()}<br/>Idade: ${p.getIdade()}`;
    res.appendChild(div);
  });
};

btn_add.addEventListener("click", (evt) => {
  const nome = document.querySelector("#f_nome");
  const idade = document.querySelector("#f_idade");
  const p = new Pessoa(nome.value, idade.value);
  pessoas.push(p);
  nome.value = "";
  idade.value = "";
  nome.focus();
  addPessoas();
});

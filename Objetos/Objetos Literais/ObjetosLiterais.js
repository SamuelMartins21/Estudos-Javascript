const Pessoa = { //Objeto Literal = É uma forma de criar um objeto diretamente no código, sem a necessidade de uma definição de classe e todos os objetos criados a partir dele salvam os dados no mesmo espaço de memória
    nome: "bruno" //Recebe em aqui é " : " em vez de " = " 
}

const p1 = Pessoa
const p2 = Pessoa

console.log(p1)
console.log(p2)

p2.nome = "Raissa bobinha"

console.log(p1)
console.log(p2)
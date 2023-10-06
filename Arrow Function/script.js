//Funções arrowfunction são uma forma de declarar funções anonimas(forma bem melhor diga-se de passagem kkkkkk)

const soma = (v1,v2)=>{return v1+v2} //Forma de declarar uma arrowfunction

const nome = n => {return n} //No caso de ser passado apenas UM PARÂMETRO não é necessario coloca-lo entre parêntese

const soma2 = n => n+10 //No caso de eu não colocar "Return" e for uma função com apenas uma linha simples não é necessario o uso de colchete e a função por padrão irá retornar o resultado 

const soma3 = (n1,n2) => {
    let res = n1 + n2
    return res
}


console.log(nome("samuel"))
console.log(soma(12, 12))
console.log(soma2(1))
console.log(soma3(2, 12))

